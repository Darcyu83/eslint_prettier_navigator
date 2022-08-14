import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { ProfileStackParams } from '../../navigator/ProfileStackNav';

interface IProps {
  extraData: string;
}

function ProfileHomeScreen({ extraData }: IProps) {
  const navigation = useNavigation<NativeStackScreenProps<ProfileStackParams>['navigation']>();
  useEffect(() => () => {
    console.log('ProfileHomeScreen detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Home Screen in branch1 == {extraData}</Text>
      <Button title='Go to Screen1' onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
}

export default ProfileHomeScreen;
