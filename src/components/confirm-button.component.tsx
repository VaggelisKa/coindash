import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import { AppContext } from 'context/AppContextProvider';

const ConfirmButton: React.FC = () => {
  const { confirmSettings } = useContext(AppContext);

  return (
    <View>
      <Button title="Apply" onPress={() => confirmSettings('hi')} />
    </View>
  );
};

export default ConfirmButton;
