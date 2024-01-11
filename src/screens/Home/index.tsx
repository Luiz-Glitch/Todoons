import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import { Container, ContainerButton, ContainerHeaderCalendar, ContainerTask } from './style';
import { Button } from '../../components/atoms/button';
import { Calendar } from '../../components/atoms/calendar';
import { Header } from '../../components/atoms/header';
import { Task } from '../../components/atoms/task';

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollView>
        <ContainerHeaderCalendar>
          <Header />
          <Calendar />
        </ContainerHeaderCalendar>
        <ContainerTask>
          <Task name="olabhfbhfbshvbdfhvbdfbsbsjhbvjbsfvjkbvhjsbv" />
          <Task name="olabhfbhfbshvbdfhvbdfbsbsjhbvjbsfvjkbvhjsbv" />
          <Task name="olabhfbhfbshvbdfhvbdfbsbsjhbvjbsfvjkbvhjsbv" />
          <Task name="olabhfbhfbshvbdfhvbdfbsbsjhbvjbsfvjkbvhjsbv" />
          <Task name="olabhfbhfbshvbdfhvbdfbsbsjhbvjbsfvjkbvhjsbv" />
          <Task name="olabhfbhfbshvbdfhvbdfbsbsjhbvjbsfvjkbvhjsbv" />
          <Task name="olabhfbhfbshvbdfhvbdfbsbsjhbvjbsfvjkbvhjsbv" />
          <Task name="olabhfbhfbshvbdfhvbdfbsbsjhbvjbsfvjkbvhjsbv" />
          <Task name="olabhfbhfbshvbdfhvbdfbsbsjhbvjbsfvjkbvhjsbv" />
        </ContainerTask>
      </ScrollView>
      <ContainerButton>
        <Button
          label="Criar tarefa"
          action={() => {
            navigation.navigate('CreateTask' as never);
          }}
        />
      </ContainerButton>
    </Container>
  );
}
