import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { ProfileStackParams } from '../../navigator/ProfileStackNav';

interface IProps {}

function ProfileScreen2({}: IProps) {
  const navigation = useNavigation<NativeStackScreenProps<ProfileStackParams>['navigation']>();
  useEffect(() => () => {
    console.log('ProfileScreen2 detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ProfileScreen2 in branch1</Text>
      <Button title='Go to Screen3' onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
}

export default ProfileScreen2;
