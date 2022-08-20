import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../../../App';

export default function SettingScreen1() {
  const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SettingScreen1</Text>
      <Button
        title='Go to ProfileHome'
        onPress={() => navigation.navigate('Profile', { screen: 'ProfileHome' })}
      />
    </View>
  );
}
