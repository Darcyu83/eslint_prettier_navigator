import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

import { ProfileStackParams } from './navigator/ProfileStackNav';

interface IProps {
  extraData: string;
}

function TabChat({ extraData }: IProps) {
  const navigation = useNavigation<NativeStackScreenProps<ProfileStackParams>['navigation']>();
  useEffect(() => () => {
    console.log('TabChat detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TabMain Home == {extraData}</Text>
      <Button title='Go to Profile' onPress={() => navigation.navigate('ProfileHome')} />
    </View>
  );
}

export default TabChat;
