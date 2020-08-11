import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export interface IHomeScreenProps {}

export const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ColorPalete');
                }}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home');
                }}>
                <Text>Test 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home');
                }}>
                <Text>Test 2</Text>
            </TouchableOpacity>
        </View>
    );
};
