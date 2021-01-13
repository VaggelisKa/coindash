import React, { useContext } from 'react';
import { AppContext } from 'context/AppContextProvider';
import { Coin } from 'models/models';

import { FlatList, StyleSheet, Text } from 'react-native';
import CoinOverview from './coin-overview.component';

interface Props {
  topSection: boolean
}

const CoinsOverview: React.FC<Props> = ({ topSection }: Props) => {
  const { coinList } = useContext(AppContext);

  const getCoinsToDisplay = (coinList: {[id: string]: Coin}) => {
    return Object.values(coinList).slice(0, topSection ? 10 : 100);
  };

  return (
    <>
      <Text style={styles.textStyles}>
        { topSection ? 'Your favorites' : 'Add to favorites' }
      </Text>
      <FlatList
        data={getCoinsToDisplay(coinList)}
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
    aspectRatio: 2,
    marginVertical: 20,
  },
  topSectionContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  textStyles: {
    flex: 1,
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 40,
    fontSize: 16,
    marginBottom: -200,
  }
});

export default CoinsOverview;
