import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SettingStackParams } from '../../navigator/SettingStackNav';

export default function SettingsHomeScreen() {
    const navigation = useNavigation<NativeStackScreenProps<SettingStackParams>['navigation']>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SettingsHomeScreen</Text>
            <Button title='Go to SettingsHome' onPress={() => navigation.navigate('SettingHome')} />
            <Button
                title='Go to SettingsScreen1'
                onPress={() => navigation.navigate('SettingScreen1')}
            />
        </View>
    );
}
