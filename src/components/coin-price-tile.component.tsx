import { PriceData } from 'models/models';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  itemData: PriceData
}

const CoinPriceTile: React.FC<Props> = ({ itemData }: Props) => {
  const {
    PRICE
  } = itemData;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{PRICE}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#fff',
    alignSelf: 'center'
  }
});

export default CoinPriceTile;
