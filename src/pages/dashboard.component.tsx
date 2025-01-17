import CoinPriceOverview from 'components/coin-price-overview.component';
import CoinSpotlight from 'components/coin-spotlight.component';
import Spinner from 'components/spinner.component';
import { AppContext } from 'context/AppContextProvider';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Dashboard: React.FC = () => {
  const {
    savedSettings,
    favorites,
    getPrices,
    loading,
    selectedFavorite,
    getHistoricalData,
    selectFavoriteCoin
  } = useContext(AppContext);

  const { firstVisit } = savedSettings;

  useEffect(() => {
    getPrices(favorites);
  }, []);

  useEffect(() => {
    selectFavoriteCoin(favorites[0]);
  }, []);


  useEffect(() => {
    getHistoricalData();
  }, [selectedFavorite]);

  return (
    firstVisit || favorites.length <= 0
      ?
      <Text style={styles.text}>
        Hi, you currently have no favorite coins to monitor.
        Go to favourites tab where you can add some!
      </Text>
      : loading ? <Spinner /> : (
      <View style={styles.lowerContainer}>
        <CoinPriceOverview />
        <CoinSpotlight />
      </View>
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
  lowerContainer: {
    flex: 2,
  }
});

export default Dashboard;
