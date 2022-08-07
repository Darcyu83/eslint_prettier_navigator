import { StackActions, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../../App';

function PushedScreen() {
  const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();
  useEffect(() => () => {
    console.log('PushedScreen detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen in branch1</Text>
      <Button title='Go to Home' onPress={() => navigation.dispatch(StackActions.popToTop())} />
    </View>
  );
}

export default PushedScreen;
