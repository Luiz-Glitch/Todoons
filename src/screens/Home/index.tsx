import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';

import { Container, ContainerButton, ContainerHeaderCalendar, ContainerTask } from './style';
import { Button } from '../../components/atoms/button';
import { Calendar } from '../../components/atoms/calendar';
import { Header } from '../../components/atoms/header';
import { Task } from '../../components/atoms/task';
import { SearchBar } from '../../components/molecules/SearchBar';
import { useMainContext } from '../../hooks/useMainContext';
import { RootStackParamsList } from '../../navigators/RootStackParams';
import { useMemo, useState } from 'react';
import { TaskProps } from '../../contexts/main';

const removeAccents = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const filterTaskByTitleOrPriority = (task: TaskProps, query:String) => {
  let queryPriority = query.split(':')
  return (
    removeAccents(task.title.toLowerCase()).includes(
      removeAccents(query.toLowerCase()),
    ) ||
    task.priority?.includes(
      queryPriority[1]? queryPriority[1].toUpperCase(): '0'
    )
  );
};

type createScreenProp = NativeStackNavigationProp<RootStackParamsList, 'CreateTask'>;
export function HomeScreen() {
  const [query, setQuery] = useState('')
  const navigation = useNavigation<createScreenProp>();
  const { tasks } = useMainContext();

  const tasksFilter = useMemo(() => {
    let filteredTasks:TaskProps[] = tasks
    if (query) {
      filteredTasks = filteredTasks.filter((task) => {
        return filterTaskByTitleOrPriority(task, query)
      })
    }

    return filteredTasks
  }, [tasks, query])

  return (
    <Container>
      <ScrollView>
        <ContainerHeaderCalendar>
          <Header />
          <Calendar />
          <SearchBar placeholder="Procurar Tarefas" onChangeText={(text) => setQuery(text)} />
        </ContainerHeaderCalendar>
        <ContainerTask>
          {tasksFilter.map((task) => (
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
