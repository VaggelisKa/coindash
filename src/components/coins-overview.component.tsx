import { AppContext } from 'context/AppContextProvider';
import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CoinOverview from './coin-overview.component';

const CoinsOverview: React.FC = () => {
  const { coinList } = useContext(AppContext);

  return (
    <FlatList
      data={Object.keys(coinList)}
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
