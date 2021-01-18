import { PriceData } from 'models/models';
import React, { useCallback, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sharedStyles } from 'components/coin-overview.component';
import { AppContext } from 'context/AppContextProvider';

interface Props {
  itemData: PriceData
}

const numberFormat = (number: number): number => +(number.toString()).slice(0, 5);

const CoinPriceTile: React.FC<Props> = ({ itemData }: Props) => {
  const { selectFavoriteCoin, favorites } = useContext(AppContext);
  const {
    PRICE,
    FROMSYMBOL,
    CHANGEPCT24HOUR
  } = itemData;

  const handleTouch = useCallback((): void => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].Symbol === FROMSYMBOL) {
        selectFavoriteCoin(favorites[i]);
        return;
      }
    }
  }, []);

  return (
    <TouchableOpacity style={{width: '100%', flex: 1}} onPress={handleTouch}>
      <View style={styles.container}>
        <View style={styles.firstiLinecontainer}>
          <Text style={styles.symbolText}>{FROMSYMBOL}</Text>
          <Text style={CHANGEPCT24HOUR < 0 ? styles.dailyChangeTextRed : styles.dailyChangeTextGreen}>{numberFormat(CHANGEPCT24HOUR)}%</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>€{numberFormat(PRICE)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...sharedStyles,
    flex: 1,
    paddingBottom: 20
  },
  firstiLinecontainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 5
  },
  symbolText: {
    color: '#fff',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 16,
    fontStyle: 'italic'
  },
  dailyChangeTextRed: {
    alignSelf: 'flex-end',
    color: '#f1554d'
  },
  dailyChangeTextGreen: {
    color: '#c7f7a2',
    alignSelf: 'flex-end',
  },
  priceText: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontSize: 19,
  }
});

export default CoinPriceTile;
