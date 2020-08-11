import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens';
import ColorPalete from './screens/ColorPalete';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'OOOOOLAAA' }}
                />
                <Stack.Screen
                    name="ColorPalete"
                    component={ColorPalete}
                    options={{ title: 'COOOCCCOOO' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
