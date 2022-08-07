import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { BranchStackParamList } from '../../App';

interface IProps {}

function Screen2({}: IProps) {
  const navigation = useNavigation<NativeStackScreenProps<BranchStackParamList>['navigation']>();
  useEffect(() => () => {
    console.log('Screen2 detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen2 in branch1</Text>
      <Button title='Go to Screen3' onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
}

export default Screen2;
