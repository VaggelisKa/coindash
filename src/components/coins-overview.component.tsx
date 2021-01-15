import React, { useCallback, useContext } from 'react';
import _ from 'lodash';
import { AppContext } from 'context/AppContextProvider';

import { FlatList, StyleSheet, Text } from 'react-native';
import CoinOverview from './coin-overview.component';
import Search from './search.component';

interface Props {
  topSection: boolean
}

const CoinsOverview: React.FC<Props> = ({ topSection }: Props) => {
  const { coinList, favorites, filteredCoins } = useContext(AppContext);

  const getBottomSectionCoins = useCallback(() => {
    return Object.keys(filteredCoins).length > 1
           ? Object.values(filteredCoins).filter((c) => !_.some(favorites, c))
           : Object.values(coinList).filter((c) => !_.some(favorites, c));
  }, [filteredCoins]);

  const getCoinsToDisplay = () => {
    return topSection ? favorites : ( filteredCoins ? getBottomSectionCoins() : Object.values(coinList));
  };

  return (
    <>
      <Text style={styles.textStyles}>
        { topSection ? (favorites.length > 0 ? 'Your favorites, touch to remove' : 'No favorites') : 'Touch to add favorites' }
      </Text>
      {topSection ? null : <Search />}
      <FlatList
        data={getCoinsToDisplay()}
        style={topSection ? styles.topSectionContainer : styles.container}
        renderItem={({item}) => <CoinOverview item={item} topSection={topSection} />}
        numColumns={topSection ? undefined : 2}
        keyExtractor={(_, index) => 'key' + index}
        disableVirtualization={true}
        horizontal={topSection}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  topSectionContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  textStyles: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 40,
    fontSize: 16,
    marginBottom: -180,
  }
});

export default CoinsOverview;
