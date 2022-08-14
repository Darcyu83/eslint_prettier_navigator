import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { ProfileStackParams } from '../../navigator/ProfileStackNav';

interface IProps {}

function ProfileScreen3({}: IProps) {
  const navigation = useNavigation<NativeStackScreenProps<ProfileStackParams>['navigation']>();
  useEffect(() => () => {
    console.log('ProfileScreen3 detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ProfileScreen3 in branch1</Text>
      <Button title='Go to Details' onPress={() => navigation.navigate('Details', { pushed: 0 })} />
    </View>
  );
}

export default ProfileScreen3;
