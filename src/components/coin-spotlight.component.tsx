import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { sharedStyles } from 'components/coin-overview.component';
import { AppContext } from 'context/AppContextProvider';
import ChartComponent from './chart.component';

const CoinSpotlight: React.FC = () => {
  const { selectedFavorite } = useContext(AppContext);


  return (
    <View style={styles.container}>
      <Image source={{uri: `http://cryptocompare.com/${selectedFavorite?.ImageUrl}`}} style={styles.image} />
      <Text style={styles.titleText}>{selectedFavorite?.FullName}</Text>
      <View style={styles.chartWrapper}>
        <ChartComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...sharedStyles,
    marginBottom: 10,
    paddingBottom: 150,
    flexGrow: 1.8,
  },
  titleText: {
    color: '#fff',
    paddingLeft: 5,
    alignSelf: 'center',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  image: {
    marginTop: 5,
    height: 60,
    width: 60,
    borderRadius: 60/2,
    alignSelf: 'center'
  },
  chartWrapper: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CoinSpotlight;
