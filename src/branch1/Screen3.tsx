import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { BranchStackParamList, RootStackParamList } from '../../App';

interface IProps {}

function Screen3({}: IProps) {
  const navigation = useNavigation<NativeStackScreenProps<BranchStackParamList>['navigation']>();
  useEffect(() => () => {
    console.log('Screen3 detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen3 in branch1</Text>
      <Button title='Go to Details' onPress={() => navigation.navigate('Details', { pushed: 0 })} />
    </View>
  );
}

export default Screen3;
