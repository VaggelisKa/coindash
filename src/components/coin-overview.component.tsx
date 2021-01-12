import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  item: string
}

const CoinOverview: React.FC<Props> = ({ item }: Props) => {
  return (
    <View style={styles.itemStyles}>
      <Text style={styles.textStyles}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    overflow: 'hidden'
  },
  textStyles: {
    color: '#fff'
  }
});

export default CoinOverview;
