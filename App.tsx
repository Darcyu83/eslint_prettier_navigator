import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/branch1/HomeScreen';
import MainHome from './src/MainHome';
import NavBranch1 from './src/navigator/NavBranch1';

interface IProps {}

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  MainHome: undefined;
  HomeBranch1: NavigatorScreenParams<BranchStackParamList>;
  HomeBranch2: undefined;
  HomeBranch3: undefined;
};

export type BranchStackParamList = {
  HomeScreen: undefined;
  Details: { pushed: number };
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  PushedScreen: undefined;
};
function App({}: IProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainHome'>
          {(props) => <MainHome {...props} extraData='extraData' />}
        </Stack.Screen>
        <Stack.Screen name='HomeBranch1' component={NavBranch1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
