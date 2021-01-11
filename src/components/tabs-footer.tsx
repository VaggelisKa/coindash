/* eslint-disable react/display-name */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomePage from 'pages/welcome-page.components';
import Dashboard from 'pages/dashboard.component';
import SettingsContainer from 'pages/settings.container';

const Tab = createBottomTabNavigator();

const TabsFooter: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: '#010e2c'}}
        initialRouteName="Home"
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}
      >
        <Tab.Screen
          name="Home"
          component={WelcomePage}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsContainer}
          options={{title: 'Settings'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const screenOptions = ({ route }: any) => ({
  tabBarIcon: ({ focused, color }: any) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
      ? 'home'
      : 'home-outline';
    } else if (route.name === 'Dashboard') {
      iconName = focused
        ? 'bar-chart'
        : 'bar-chart-outline';
    } else {
      iconName = focused
        ? 'settings'
        : 'settings-outline';
    }

    return <Ionicons name={iconName as 'key'} size={30} color={color} />;
  }
});

const tabBarOptions = {
  activeTintColor: '#f7941b',
  showLabel: false,
  inactiveTintColor: '#fff',
  style: {
    backgroundColor: '#010e2c'
  }
};


export default TabsFooter;
