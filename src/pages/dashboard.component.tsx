import CoinPriceOverview from 'components/coin-price-overview.component';
import Spinner from 'components/spinner.component';
import { AppContext } from 'context/AppContextProvider';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';

const Dashboard: React.FC = () => {
  const { savedSettings, favorites, getPrices, loading } = useContext(AppContext);
  const { firstVisit } = savedSettings;

  useEffect(() => {
    getPrices(favorites);
  }, []);

  return (
    firstVisit || favorites.length <= 0
      ?
      <Text style={styles.text}>
        Hi, you currently have no favorite coins to monitor.
        Go to favourites tab where you can add some!
      </Text>
      : loading ? <Spinner /> : (
      <>
        <CoinPriceOverview />
      </>
      )
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 5,
    fontSize: 20,
    color: '#fff'
  },
});

export default Dashboard;
