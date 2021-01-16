import React, { useContext } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { AppContext } from 'context/AppContextProvider';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>
}

const ConfirmButton: React.FC<Props> = ({ navigation }: Props) => {
  const { confirmSettings } = useContext(AppContext);

  return (
    <View style={styles.viewStyles}>
      <Button
        title="Confirm Favorites"
        color="#f7941b"
        onPress={() => {
          confirmSettings();
          navigation.navigate('Dashboard');
        }}
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
