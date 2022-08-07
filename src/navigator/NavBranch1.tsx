import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BranchStackParamList } from '../../App';
import DetailsScreen from '../branch1/DetailsScreen';
import HomeScreen from '../branch1/HomeScreen';
import PushedScreen from '../branch1/PushedScreen';
import Screen1 from '../branch1/Screen1';
import Screen2 from '../branch1/Screen2';
import Screen3 from '../branch1/Screen3';

interface IProps {}

const Stack = createNativeStackNavigator<BranchStackParamList>();

function NavBranch1({}: IProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='Details' component={DetailsScreen} />
      <Stack.Screen name='Screen1' component={Screen1} />
      <Stack.Screen name='Screen2' component={Screen2} />
      <Stack.Screen name='Screen3' component={Screen3} />
      <Stack.Screen name='PushedScreen' component={PushedScreen} />
    </Stack.Navigator>
  );
}

export default NavBranch1;
