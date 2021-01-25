import React, { useContext } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { AppContext } from 'context/AppContextProvider';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>
  title: string,
  runConfirm: boolean,
  navigateTo: string
}

const ConfirmButton: React.FC<Props> = ({ navigation, title, runConfirm, navigateTo }: Props) => {
  const { confirmSettings } = useContext(AppContext);

  return (
    <View style={runConfirm ? styles.viewStyles : styles.viewStylesWelcomePage}>
      <Button
        title={title}
        color="#f7941b"
        onPress={() => {
          if (runConfirm) {
            confirmSettings();
          }
          navigation.navigate(navigateTo);
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
  viewStylesWelcomePage: {
    flex: 1,
    paddingTop: 15,
    marginHorizontal: 100,
    alignItems: 'center',
    paddingBottom: 190
  },
  buttonStyles: {
    color: 'red',
    alignSelf: 'center',
    position: 'absolute',
  }
});

export default ConfirmButton;
