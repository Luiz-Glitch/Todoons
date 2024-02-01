import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Container, ContainerButton, ContainerHeaderCalendar, ContainerTask } from './style';
import { SearchBar } from '../../components/molecules/SearchBar';
import { Button } from '../../components/atoms/button';
import { Calendar } from '../../components/atoms/calendar';
import { Header } from '../../components/atoms/header';
import { Task } from '../../components/atoms/task';
import { RootStackParamsList } from '../../navigators/RootStackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMainContext } from '../../hooks/useMainContext';

type createScreenProp = NativeStackNavigationProp<RootStackParamsList, 'CreateTask'>;
export function HomeScreen() {
  const navigation = useNavigation<createScreenProp>();
  const { tasks } = useMainContext();

  return (
    <Container>
      <ScrollView>
        <ContainerHeaderCalendar>
          <Header />
          <Calendar />
          <SearchBar placeholder="Search Tasks" />
        </ContainerHeaderCalendar>
        <ContainerTask>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ContainerTask>
      </ScrollView>
      <ContainerButton>
        <Button
          label="Criar tarefa"
          action={() => {
            navigation.navigate('CreateTask');
          }}
        />
      </ContainerButton>
    </Container>
  );
}
