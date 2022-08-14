import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DetailsScreen from '../screens/profile/DetailsScreen';
import ProfileHomeScreen from '../screens/profile/ProfileHomeScreen';

import ProfileScreen1 from '../screens/profile/ProfileScreen1';
import ProfileScreen2 from '../screens/profile/ProfileScreen2';
import ProfileScreen3 from '../screens/profile/ProfileScreen3';
import PushedScreen from '../screens/profile/PushedScreen';

interface IProps {}
export type ProfileStackParams = {
  ProfileHome: undefined;
  Details: { pushed: number };
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  PushedScreen: undefined;
};

const ProfileStack = createNativeStackNavigator<ProfileStackParams>();

function ProfileStackNav({}: IProps) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name='ProfileHome' component={ProfileHomeScreen} />
      <ProfileStack.Screen name='Screen1' component={ProfileScreen1} />
      <ProfileStack.Screen name='Screen2' component={ProfileScreen2} />
      <ProfileStack.Screen name='Screen3' component={ProfileScreen3} />
      <ProfileStack.Screen name='Details' component={DetailsScreen} />
      <ProfileStack.Screen name='PushedScreen' component={PushedScreen} />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackNav;
