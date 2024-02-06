import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import * as Yup from 'yup';

import { Container, Form, ContainerInputDate, ContainerButton } from './style';
import { DateRangeInput } from '../../components/DateRangeInput';
import { MultilineTextInput } from '../../components/MultilineTextInput';
import { Toggle } from '../../components/atoms/Toggle';
import { Button } from '../../components/atoms/button';
import { Categories } from '../../components/molecules/Categories';
import { InputField } from '../../components/molecules/InputField';
import { Priority } from '../../components/molecules/Priority';
import { useMainContext } from '../../hooks/useMainContext';
import { RootStackParamsList } from '../../navigators/RootStackParams';
import { TaskStatus } from '../../utils/taskOptions';

type createScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

const schema = Yup.object().shape({
  title: Yup.string().required('Este campo é obrigatório'),
  priority: Yup.string(),
  category: Yup.array().of(Yup.string()),
  dates: Yup.object().shape({
    startDate: Yup.string().nullable(),
    endDate: Yup.string().nullable(),
  }),
  description: Yup.string(),
});

export function CreateTaskScreen() {
  const { createTask, tasks } = useMainContext();

  const navigation = useNavigation<createScreenProp>();

  const { control, handleSubmit, formState } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {

    let id = 0
    for (let task of tasks){
      if (task.id >= id){
        id = task.id + 1
      }
    }
    const status = TaskStatus.TODO.value;
    createTask({ id, status, ...data });
    navigation.navigate('Home');
  };

  return (
    <Container onTouchStart={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{ padding: 16 }}>
        <Form>
          <InputField name="title" control={control} label="Título" />

          <MultilineTextInput
            name="description"
            control={control}
            label="Descrição"
            isCreateTask
            placeholder="Digite uma descrição aqui"
          />
          <ContainerInputDate>
            <DateRangeInput name="dates" control={control} isCreateTask />
          </ContainerInputDate>

          <Toggle name="emphasis" control={control} />
          <Priority name="priority" control={control} />
          <Categories />
        </Form>
      </KeyboardAvoidingView>
      <ContainerButton>
        <Button label="Salvar" disabled={formState.isValidating} action={handleSubmit(onSubmit)} />
      </ContainerButton>
    </Container>
  );
}
