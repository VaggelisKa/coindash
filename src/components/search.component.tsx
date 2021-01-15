import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AppContext } from 'context/AppContextProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';

const Search = () => {
  const { coinList, coinsFromSearch } = useContext(AppContext);

  const filterCoins = (e: any) => {
    const inputValue = e.target.value;
    handleSearch(inputValue);
  };

  const handleSearch = _.debounce((inputValue: any) => {
    const coinSymbols = Object.keys(coinList);
    const coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName);
    const allStringsToSearch = coinSymbols.concat(coinNames);

    const fuzzySearchResults = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map(result => result.string);

    const filteredCoins = _.pickBy(coinList, (result, sym) => {
      return _.includes(fuzzySearchResults, sym) || _.includes(fuzzySearchResults, result.CoinName);
    });
    coinsFromSearch(filteredCoins);
  }, 300);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search Coins..."
        placeholderTextColor='#f7941b'
        onChange={(e) => filterCoins(e)}
        accessibilityHint={undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 10
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'flex-start',
    height: 30,
    borderColor: '#f7941b',
    position: 'absolute',
    borderWidth: 2,
    color: '#fff',
  }
});

export default Search;
