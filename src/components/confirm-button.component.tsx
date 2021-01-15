import React, { useContext } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { AppContext } from 'context/AppContextProvider';

const ConfirmButton: React.FC = () => {
  const { confirmSettings } = useContext(AppContext);

  return (
    <View style={styles.viewStyles}>
      <Button
        title="Confirm Favorites"
        color="#f7941b"
        onPress={() => confirmSettings()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    marginHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    paddingBottom: 190
  },
  buttonStyles: {
    color: 'red',
    alignSelf: 'center',
    position: 'absolute',
  }
});

export default ConfirmButton;
