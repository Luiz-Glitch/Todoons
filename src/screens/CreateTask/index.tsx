import React from 'react';
import { Container, Form, ContainerInputDate, ContainerButton } from './style';
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import { InputField } from '../../components/molecules/InputField';
import { MultilineTextInput } from '../../components/atoms/MultilineTextInput';
import { DateRangeInput } from '../../components/atoms/DateRangeInput';
import { Button } from '../../components/atoms/button';
import { useMainContext } from '../../hooks/useMainContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/RootStackParams';
import { useFormik } from 'formik';

type createScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>

export function CreateTaskScreen() {
  const { createTask, tasks } = useMainContext()

  const navigation = useNavigation<createScreenProp>()

  const form = useFormik({
    initialValues: {
      title:'',
      description: ''
    },
    onSubmit: (values) => {
      let id = 0
      for (let task of tasks){
        if (task.id >= id){
          id = task.id + 1
        }
      }
      createTask({id: id,...values})
      navigation.navigate('Home')
    }
  })

  return (
    <Container onTouchStart={()=>Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{padding:16}}>
        <Form>
          <InputField
            label='Título'
            onChangeText={form.handleChange('title')}
            value={form.values.title}
          />

          <MultilineTextInput
            label='Descrição'
            isCreateTask={true}
            onChangeText={form.handleChange('description')}
            value={form.values.description}
          />
          <ContainerInputDate>
            <DateRangeInput isCreateTask={true}/>
          </ContainerInputDate>
        </Form>
      </KeyboardAvoidingView>
      <ContainerButton>
        <Button label='Salvar' action={form.handleSubmit}/>
      </ContainerButton>
    </Container>
  )
}
