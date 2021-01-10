import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomePage from 'pages/welcome-page.components';
import Dashboard from 'pages/dashboard.component';
import Settings from 'pages/settings.component';

const Tab = createBottomTabNavigator();


const TabsFooter: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
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
          component={Settings}
          options={{title: 'Settings'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabsFooter;
