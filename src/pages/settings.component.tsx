import React from 'react';
import { View, StyleSheet } from 'react-native';

import ConfirmButton from 'components/confirm-button.component';
import CoinsOverview from 'components/coins-overview.component';

const Settings: React.FC = () => {
  return (
    <View style={styles.viewStyles}>
      <ConfirmButton />
      <CoinsOverview />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    justifyContent: 'center',
    height: 100
  }
});

export default Settings;
