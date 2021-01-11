import React, { useContext } from 'react';
import { Text } from 'react-native';

import ConfirmButton from 'components/confirm-button.component';
import { Container } from 'styles/settings.styles';

import { AppContext } from 'context/AppContextProvider';

const Settings: React.FC = () => {
  const { coinList } = useContext(AppContext);

  console.log(coinList);

  return (
    <Container>
      <Text>Settings</Text>
      <ConfirmButton />
    </Container>
  );
};

export default Settings;
