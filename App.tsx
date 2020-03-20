import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header, ThemeProvider } from 'react-native-elements';

import ClientDirectory from './screens/ClientDirectory';
import DataReports from './screens/DataReports';
import Games from './screens/Games';
import Help from './screens/Help';
import SystemSettings from './screens/SystemSettings';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Header
          leftComponent={{
            text: 'Client ID: sample',
            style: { color: '#fff' }
          }}
        />

        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            tabStyle: { width: 150 },
            scrollEnabled: true
          }}
        >
          <Tab.Screen name="Games" component={Games} />
          <Tab.Screen name="Client Directory" component={ClientDirectory} />
          <Tab.Screen name="Data Reports" component={DataReports} />
          <Tab.Screen name="System Settings" component={SystemSettings} />
          <Tab.Screen name="Help" component={Help} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
