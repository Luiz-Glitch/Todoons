import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { Header } from '../../components/header';
import { Calendar } from '../../components/calendar';
import { Container, ContainerButton, ContainerHeaderCalendar } from './style';
import { Button } from '../../components/button';
import { MagicMotion } from 'react-magic-motion';

export function Home() {
  return (
    <MagicMotion>
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
        </ScrollView>
        <ContainerButton>
          <Button label='Criar tarefa'/>
        </ContainerButton>
      </Container>
    </MagicMotion>
  );
}
