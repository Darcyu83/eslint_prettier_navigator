import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Dimensions, ScrollView, Text, TextInput, View } from 'react-native';
import { ProfileStackParams } from '../../navigator/ProfileStackNav';

interface IProps {}

function ProfileScreen1({}: IProps) {
  const navigation = useNavigation<NativeStackScreenProps<ProfileStackParams>['navigation']>();
  useEffect(() => () => {
    console.log('ProfileScreen1 detroyed');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ProfileScreen1 in branch1</Text>
      <ScrollView>
        <Text
          style={{
            width: '100%',
            height: Dimensions.get('window').height / 2,
            backgroundColor: 'dodgerblue',
          }}
        >
          추가
        </Text>
        <TextInput style={{ marginBottom: 20 }} placeholder='place holder ' />
      </ScrollView>
      <Button title='Go to Screen2' onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

export default ProfileScreen1;
