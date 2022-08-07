import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

interface IProps {
  extraData: string;
}

function MainHome({ extraData }: IProps) {
  const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();
  useEffect(() => () => {
    console.log('MainHome detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Home == {extraData}</Text>
      <Button
        title='Go to Screen1'
        onPress={() => navigation.navigate('HomeBranch1', { screen: 'HomeScreen' })}
      />
      <Button title='Go to Screen2' onPress={() => navigation.navigate('HomeBranch2')} />
      <Button title='Go to Screen3' onPress={() => navigation.navigate('HomeBranch3')} />
    </View>
  );
}

export default MainHome;
