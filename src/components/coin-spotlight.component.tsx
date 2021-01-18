import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

import { sharedStyles } from 'components/coin-overview.component';
import { AppContext } from 'context/AppContextProvider';

const CoinSpotlight: React.FC = () => {
  const { selectedFavorite } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: `http://cryptocompare.com/${selectedFavorite?.ImageUrl}`}} style={styles.image} />
      <Text style={styles.titleText}>{selectedFavorite?.FullName}</Text>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...sharedStyles,
    marginBottom: 10,
    paddingBottom: 150,
    flexGrow: 1.8
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
    height: 70,
    width: 70,
    borderRadius: 70/2,
    alignSelf: 'center'
  }
});

export default CoinSpotlight;
