import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { CreateTaskScreen } from '../screens/CreateTask';
import { HomeScreen } from '../screens/Home';
import theme from '../style/theme';

export function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
        }}>
        <Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

        <Screen
          name="CreateTask"
          component={CreateTaskScreen}
          options={{ headerTitle: 'Criar tarefa' }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
