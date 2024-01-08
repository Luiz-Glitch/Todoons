import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { Header } from '../../components/header';
import { Calendar } from '../../components/calendar';
import { Container, ContainerButton, ContainerHeaderCalendar, ContainerTask } from './style';
import { Button } from '../../components/button';
import { MagicMotion } from 'react-magic-motion';
import { Task } from '../../components/task';

export function Home() {
  return (
      <Container>
        <ScrollView>
          <StatusBar
            hidden = {false}
            backgroundColor = "#736CED"
            translucent = {false}
          />
          <ContainerHeaderCalendar>
            <Header />
            <Calendar/>
          </ContainerHeaderCalendar>
          <ContainerTask>
            <Task name='olabhfbhfbshvbdfhvbdfbsbsjhbvjbsfvjkbvhjsbv' />
          </ContainerTask>
        </ScrollView>
        <ContainerButton>
          <Button label='Criar tarefa'/>
        </ContainerButton>
      </Container>
  );
}
