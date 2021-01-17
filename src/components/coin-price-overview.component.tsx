import { AppContext } from 'context/AppContextProvider';
import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import CoinPriceTile from './coin-price-tile.component';

const CoinPriceOverview: React.FC = () => {
  const { prices } = useContext(AppContext);

  return (
    <>
      <FlatList
        data={prices}
        style={styles.container}
        renderItem={({item}) => <CoinPriceTile itemData={item.EUR} /> }
        numColumns={2}
        keyExtractor={(_, index) => 'key' + index}
        disableVirtualization
        removeClippedSubviews
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.dividerWrapper}>
        <Divider style={styles.divider} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  dividerWrapper: {
    flex: 1,
    flexGrow: 2.5
  },
  divider: {
    backgroundColor: '#f7941b',
    marginHorizontal: 80,
  }
});

export default CoinPriceOverview;
