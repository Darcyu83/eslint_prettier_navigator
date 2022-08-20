import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ProfileStackNav, { ProfileStackParams } from './src/navigator/ProfileStackNav';
import SettingStackNav, { SettingStackParams } from './src/navigator/SettingStackNav';
import TabNav from './src/navigator/TabNav';

interface IProps {}

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  MainHome: undefined;
  ChatHome: undefined;
  // MainHome: NavigatorScreenParams<BtmTabBarParams>;
  // ChatHome: NavigatorScreenParams<BtmTabBarParams>;
  Profile: NavigatorScreenParams<ProfileStackParams>;
  Settings: NavigatorScreenParams<SettingStackParams>;
};

function App({}: IProps) {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='MainHome' component={TabNav} options={{ headerShown: false }} />
        <RootStack.Screen name='ChatHome' component={TabNav} options={{ headerShown: false }} />
        <RootStack.Screen
          name='Profile'
          component={ProfileStackNav}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name='Settings'
          component={SettingStackNav}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
