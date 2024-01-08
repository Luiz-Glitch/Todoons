import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";

export function Routes(){
    const {Navigator, Screen} = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Screen name="Home" component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}