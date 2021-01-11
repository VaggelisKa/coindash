import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import ConfirmButton from 'components/confirm-button.component';

import { AppContext } from 'context/AppContextProvider';

const Settings: React.FC = () => {
  const { coinList } = useContext(AppContext);

  console.log(coinList);

  return (
    <View>
      <Text>Settings</Text>
      <ConfirmButton />
    </View>
  );
};

export default Settings;
