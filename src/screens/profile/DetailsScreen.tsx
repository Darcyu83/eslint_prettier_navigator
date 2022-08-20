import { StackActions, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../../../App';
import { ProfileStackParams } from '../../navigator/ProfileStackNav';

function DetailsScreen({ route }: NativeStackScreenProps<ProfileStackParams, 'Details'>) {
  const navigation =
    useNavigation<NativeStackScreenProps<RootStackParamList, 'Profile'>['navigation']>();
  useEffect(() => () => {
    console.log(`DetailsScreen No.[${route.params.pushed}] detroyed`);
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'red' }}>
        Details Screen in branch1 : screen No. [{route.params.pushed}]
      </Text>
      <Button title='Go to Home' onPress={() => navigation.dispatch(StackActions.popToTop())} />
      <Button title='Go to MainHome and MainHome' onPress={() => navigation.navigate('MainHome')} />
      <Button title='Go to MainHome and ChatHome' onPress={() => navigation.navigate('ChatHome')} />
      <Button
        title='Go to SettingScreen1'
        onPress={() => navigation.navigate('Settings', { screen: 'SettingScreen1' })}
      />
    </View>
  );
}

export default DetailsScreen;
