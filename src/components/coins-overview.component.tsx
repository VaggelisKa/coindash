import React, { useContext } from 'react';
import { AppContext } from 'context/AppContextProvider';
import { Coin } from 'models/models';

import { FlatList, StyleSheet } from 'react-native';
import CoinOverview from './coin-overview.component';

const CoinsOverview: React.FC = () => {
  const { coinList } = useContext(AppContext);

  const getCoinsToDisplay = (coinList: {[id: string]: Coin}) => {
    return Object.values(coinList).slice(0, 100);
  };

  return (
    <FlatList
      data={getCoinsToDisplay(coinList)}
      style={styles.container}
      renderItem={({item}) => <CoinOverview item={item} />}
      numColumns={2}
      keyExtractor={(_, index) => 'key' + index}
      disableVirtualization={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  }
});

export default CoinsOverview;
