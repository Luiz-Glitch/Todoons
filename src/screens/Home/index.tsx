import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Container, ContainerButton, ContainerHeaderCalendar, ContainerTask } from './style';
import { Button } from '../../components/atoms/button';
import { Calendar } from '../../components/atoms/calendar';
import { Header } from '../../components/atoms/header';
import { Task } from '../../components/atoms/task';
import { RootStackParamsList } from '../../navigators/RootStackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMainContext } from '../../hooks/useMainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

type createScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'CreateTask'
>
export function HomeScreen() {
  const navigation = useNavigation<createScreenProp>();
  const { tasks } = useMainContext()
  return (
    <Container>
      <ScrollView>
        <ContainerHeaderCalendar>
          <Header />
          <Calendar />
        </ContainerHeaderCalendar>
        <ContainerTask>
          {tasks.map((task) => 
            <Task key={task.id} name={task.title} />
          )}
        </ContainerTask>  
      </ScrollView>
      <ContainerButton>
        <Button
          label="Criar tarefa"
          action={() => {
            // AsyncStorage.removeItem('tasks')
            navigation.navigate('CreateTask');
          }}
        />
      </ContainerButton>
    </Container>
  );
}
