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
      <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
      <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

export default MainHome;
