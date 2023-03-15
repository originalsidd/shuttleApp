import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoadScreen from '../screens/LoadScreen';

const Stack = createStackNavigator();

const options = {
    headerStyle: {
        backgroundColor: '#e84',
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTitleAlign: 'center',
    headerTitle: 'Shuttle Tracking App',
    headerTintColor: '#fff',
};

export const Navigator = () => {
    return (
        <NavigationContainer>
            <StatusBar animated={true} />
            <Stack.Navigator>
                <Stack.Screen
                    name='load'
                    component={LoadScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='home'
                    component={HomeScreen}
                    options={options}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
