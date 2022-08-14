import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainHome from '../MainHome';

import TabChat from '../TabChat';

const Tab = createBottomTabNavigator<BtmTabBarParams>();

type BtmTabBarParams = {
  Home: undefined;
  Chat: undefined;
};

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={MainHome} />
      <Tab.Screen name='Chat' component={TabChat} />
    </Tab.Navigator>
  );
}
