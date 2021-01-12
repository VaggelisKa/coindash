import React, { useContext } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { AppContext } from 'context/AppContextProvider';

const ConfirmButton: React.FC = () => {
  const { confirmSettings } = useContext(AppContext);

  return (
    <View style={styles.viewStyles}>
      <Button
        title="Apply"
        color="#f7941b"
        onPress={() => confirmSettings('hi')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 100,
    marginBottom: -100
  },
  buttonStyles: {
    color: 'red',
  }
});

export default ConfirmButton;
