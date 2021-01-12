import { Coin } from 'models/models';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

interface Props {
  item: Coin
}

const CoinOverview: React.FC<Props> = ({ item }: Props) => {
  const {
    CoinName,
    Symbol,
    ImageUrl
  } = item;

  return (
    <View style={styles.container}>
      <Text style={styles.coinName}>{CoinName}</Text>
      <Text style={styles.coinSymbol}>{Symbol}</Text>
      <Image source={{uri: `http://cryptocompare.com/${ImageUrl}`}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 13,
    paddingBottom: 25,
    paddingTop: 5,
    paddingHorizontal: 5,
    backgroundColor: '#06215a',
    shadowColor: '#121d5b',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  },
  coinName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  coinSymbol: {
    position: 'absolute',
    flex: 1,
    color: '#fff',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  image: {
    marginTop: 15,
    height: 70,
    width: 70,
    borderRadius: 70/2
  }
});

export default CoinOverview;
