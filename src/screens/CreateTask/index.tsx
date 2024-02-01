import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import React from 'react';
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import * as Yup from 'yup';

import { Container, Form, ContainerInputDate, ContainerButton } from './style';
import { DateRangeInput } from '../../components/atoms/DateRangeInput';
import { MultilineTextInput } from '../../components/atoms/MultilineTextInput';
import { Toggle } from '../../components/atoms/Toggle';
import { Button } from '../../components/atoms/button';
import { Categories } from '../../components/molecules/Categories';
import { InputField } from '../../components/molecules/InputField';
import { Priority } from '../../components/molecules/Priority';
import { useMainContext } from '../../hooks/useMainContext';
import { RootStackParamsList } from '../../navigators/RootStackParams';

type createScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

const Schema = Yup.object({
  title: Yup.string()
    .max(10, 'O máximo  de caractéres foi atingido')
    .required('O campo é obrigatório'),
  description: Yup.string().max(5, 'O máximo  de caractéres foi atingido'),
});

export function CreateTaskScreen() {
  const { createTask, tasks } = useMainContext();

  const navigation = useNavigation<createScreenProp>();

  const form = useFormik({
    initialValues: {
      title: '',
      description: '',
      term: '',
      emphasis: false,
    },
    onSubmit: (values) => {
      let id = 0;
      for (const task of tasks) {
        if (task.id >= id) {
          id = task.id + 1;
        }
      }
      createTask({ id, ...values });
      navigation.navigate('Home');
    },
    validationSchema: Schema,
  });

  return (
    <Container onTouchStart={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{ padding: 16 }}>
        <Form>
          <InputField
            label="Título*"
            onChangeText={form.handleChange('title')}
            value={form.values.title}
            error={form.errors.title}
          />

          <MultilineTextInput
            label="Descrição"
            isCreateTask
            onChangeText={form.handleChange('description')}
            value={form.values.description}
            error={form.errors.description}
          />
          <ContainerInputDate>
            <DateRangeInput
              isCreateTask
              value={form.values.term}
              onChageDate={form.handleChange('term')}
            />
          </ContainerInputDate>

          <Toggle value={form.values.emphasis} setValue={form.setFieldValue} />
          <Priority />
          <Categories />
        </Form>
      </KeyboardAvoidingView>
      <ContainerButton>
        <Button label="Salvar" disabled={form.isValidating} action={form.handleSubmit} />
      </ContainerButton>
    </Container>
  );
}
