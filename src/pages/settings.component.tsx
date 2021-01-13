import React from 'react';
import { View, StyleSheet } from 'react-native';

import ConfirmButton from 'components/confirm-button.component';
import CoinsOverview from 'components/coins-overview.component';

const Settings: React.FC = () => {
  return (
    <View style={styles.viewStyles}>
      <CoinsOverview topSection={true} />
      <ConfirmButton />
      <CoinsOverview topSection={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default Settings;
