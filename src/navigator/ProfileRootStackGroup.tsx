import React from 'react';
import { RootStack } from '../../App';
// import DetailsScreen from '../screens/profile/DetailsScreen';
// import ProfileHomeScreen from '../screens/profile/ProfileHomeScreen';
// import ProfileScreen1 from '../screens/profile/ProfileScreen1';
// import ProfileScreen2 from '../screens/profile/ProfileScreen2';
// import ProfileScreen3 from '../screens/profile/ProfileScreen3';
// import PushedScreen from '../screens/profile/PushedScreen';

export default function ProfileRootStackGroup() {
    return (
        <RootStack.Group>
            {/* <RootStack.Screen name='Profile' component={ProfileHomeScreen} />
      <RootStack.Screen name='ProfileHome' component={ProfileHomeScreen} />
      <RootStack.Screen name='Screen1' component={ProfileScreen1} />
      <RootStack.Screen name='Screen2' component={ProfileScreen2} />
      <RootStack.Screen name='Screen3' component={ProfileScreen3} />
      <RootStack.Screen name='Details' component={DetailsScreen} />
      <RootStack.Screen name='PushedScreen' component={PushedScreen} /> */}
        </RootStack.Group>
    );
}
