import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainHome from '../MainHome';

import TabChat from '../TabChat';
import { RootStackParamList } from '../../App';

const Tab = createBottomTabNavigator<BtmTabBarParams>();

export type BtmTabBarParams = {
  Main: undefined;
  Chat: undefined;
};

export default function TabNav({ route, navigation }: NativeStackScreenProps<RootStackParamList>) {
  const routeNmParser = useCallback((routeP: { [key: string]: any }): keyof BtmTabBarParams => {
    switch (routeP.name) {
      case 'MainHome':
        return 'Main';
      case 'ChatHome':
        return 'Chat';
      default:
        return 'Main';
    }
  }, []);
  console.log('Tab.Navigator ====  route.name', route.name, 'navigation---', navigation);
  return (
    <Tab.Navigator initialRouteName={routeNmParser(route)}>
      <Tab.Screen name='Main' component={MainHome} />
      <Tab.Screen name='Chat' component={TabChat} />
    </Tab.Navigator>
  );
}
