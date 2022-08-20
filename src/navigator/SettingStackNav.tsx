import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsHomeScreen from '../screens/settings/SettingsHomeScreen';
import SettingScreen1 from '../screens/settings/SettingScreen1';

const SettingStack = createNativeStackNavigator<SettingStackParams>();

export type SettingStackParams = {
  SettingHome: undefined;
  SettingScreen1: undefined;
};

export default function SettingStackNav() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name='SettingHome' component={SettingsHomeScreen} />
      <SettingStack.Screen name='SettingScreen1' component={SettingScreen1} />
    </SettingStack.Navigator>
  );
}
