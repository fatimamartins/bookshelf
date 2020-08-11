import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export interface IColorPaleteProps {}

const ColorPalete: React.FC<IColorPaleteProps> = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => {}}>
                <Text>ColorPalete</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ColorPalete;
