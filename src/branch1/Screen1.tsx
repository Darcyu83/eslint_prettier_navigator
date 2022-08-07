import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { BranchStackParamList, RootStackParamList } from '../../App';

interface IProps {}

function Screen1({}: IProps) {
  const navigation = useNavigation<NativeStackScreenProps<BranchStackParamList>['navigation']>();
  useEffect(() => () => {
    console.log('Screen1 detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen1 in branch1</Text>
      <Button title='Go to Screen2' onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

export default Screen1;
