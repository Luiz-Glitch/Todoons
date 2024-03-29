import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';

import { RootStackParamsList } from './RootStackParams';
import { CreateTaskScreen } from '../screens/CreateTask';
import { HomeScreen } from '../screens/Home';
import { TaskDetailsScreen } from '../screens/TaskDetails';

const TitleComponent = styled.Text`
  margin-top: 40px;
  font-size: ${({ theme }) => theme.texts.headingH2Regular.fontSize}px;
  width: 100%;
  flex-wrap: wrap;
  font-weight: bold;
`;

function Title({ name }: { name: string }) {
  return <TitleComponent>{name}</TitleComponent>;
}

export function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator<RootStackParamsList>();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fafafa',
          },
          contentStyle: {
            backgroundColor: '#fafafa',
          },
        }}>
        <Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

        <Screen
          name="CreateTask"
          component={CreateTaskScreen}
          options={{
            headerTitle: (props) => <Title name="Criar tarefa" {...props} />,
          }}
        />
        <Screen name="DetailTask" component={TaskDetailsScreen} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}
