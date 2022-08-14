import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ProfileStackNav from './src/navigator/ProfileStackNav';
import SettingsStackNav from './src/navigator/SettingsStackNav';
import TabNav from './src/navigator/TabNav';

interface IProps {}

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  MainHome: undefined;
  Profile: undefined;
  Settings: undefined;
};

function App({}: IProps) {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='MainHome' component={TabNav} />
        <RootStack.Screen
          name='Profile'
          component={ProfileStackNav}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name='Settings'
          component={SettingsStackNav}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
