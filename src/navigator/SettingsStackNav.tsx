import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SettingsHomeScreen from '../screens/settings/SettingsHomeScreen';

const SettingsStack = createNativeStackNavigator<SettingsStackParams>();

export type SettingsStackParams = {
  SettingsHome: undefined;
};

export default function SettingsStackNav() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='SettingsHome' component={SettingsHomeScreen} />;
    </SettingsStack.Navigator>
  );
}
