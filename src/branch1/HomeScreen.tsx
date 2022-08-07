import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { BranchStackParamList } from '../../App';

interface IProps {
  extraData: string;
}

function HomeScreen({ extraData }: IProps) {
  const navigation = useNavigation<NativeStackScreenProps<BranchStackParamList>['navigation']>();
  useEffect(() => () => {
    console.log('HomeScreen detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen in branch1 == {extraData}</Text>
      <Button title='Go to Screen1' onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
}

export default HomeScreen;
