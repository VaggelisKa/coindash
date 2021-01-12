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
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 13,
    padding: 30,
    paddingLeft: 5,
    overflow: 'hidden',
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
  textStyles: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default CoinOverview;
