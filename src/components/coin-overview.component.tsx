import { Coin } from 'models/models';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  item: Coin
}

const CoinOverview: React.FC<Props> = ({ item }: Props) => {
  const {
    CoinName,
    Symbol
  } = item;

  return (
    <View style={styles.container}>
      <Text style={styles.coinName}>{CoinName}</Text>
      <Text style={styles.coinSymbol}>{Symbol}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 13,
    paddingVertical: 30,
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
  textContainer: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  textContainer2: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'space-between'
  },
  coinName: {
    flex: 1,
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  coinSymbol: {
    position: 'absolute',
    flex: 1,
    color: '#fff',
    fontSize: 12,
    alignSelf: 'flex-end',
  }
});

export default CoinOverview;
