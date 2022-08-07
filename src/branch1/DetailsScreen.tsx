import { StackActions, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { BranchStackParamList, RootStackParamList } from '../../App';

function DetailsScreen({ route }: NativeStackScreenProps<BranchStackParamList, 'Details'>) {
  const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();
  useEffect(() => () => {
    console.log(`DetailsScreen No.[${route.params.pushed}] detroyed`);
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'red' }}>
        Details Screen in branch1 : screen No. [{route.params.pushed}]
      </Text>
      <Button title='Go to Home' onPress={() => navigation.dispatch(StackActions.popToTop())} />
      <Button
        color='red'
        title='Go to Details pushed'
        onPress={() => {
          navigation.push('HomeBranch1', {
            screen: 'Details',
            params: { pushed: route.params.pushed + 1 },
          });
        }}
      />
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <Button
        color='red'
        title='Go to Screen2'
        onPress={() => navigation.navigate('HomeBranch1', { screen: 'Screen2' })}
      />
    </View>
  );
}

export default DetailsScreen;
