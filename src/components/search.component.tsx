import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Search for coins" placeholderTextColor='#f7941b' />
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
