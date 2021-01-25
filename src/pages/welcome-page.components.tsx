import ConfirmButton from 'components/confirm-button.component';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const WelcomePage: React.FC = (props: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to CoinDash</Text>
    <View style={styles.paragraphWrapper}>
      <Text style={styles.paragraphText}>
        Coindash is an app that lets you select your favorite cryptocoin,
        and through the dashboard page you can monitor changes in its price!
      </Text>
      <ConfirmButton
        title='Select Favorites'
        navigateTo='Settings'
        runConfirm={false}
        {...props}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold'
  },
  paragraphWrapper: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30
  },
  paragraphText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',
  }
});

export default WelcomePage;
