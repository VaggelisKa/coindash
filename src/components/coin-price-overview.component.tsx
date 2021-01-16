import { AppContext } from 'context/AppContextProvider';
import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CoinPriceTile from './coin-price-tile.component';

const CoinPriceOverview: React.FC = () => {
  const { prices } = useContext(AppContext);

  return (
    <>
      <FlatList
        data={prices}
        style={styles.container}
        renderItem={({item}) => <CoinPriceTile itemData={item.EUR} /> }
        numColumns={1}
        keyExtractor={(_, index) => 'key' + index}
        disableVirtualization
        removeClippedSubviews
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  }
});

export default CoinPriceOverview;
