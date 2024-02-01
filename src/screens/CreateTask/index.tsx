import React from 'react';
import { Container, Form, ContainerInputDate, ContainerButton } from './style';
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import { InputField } from '../../components/molecules/InputField';
import { MultilineTextInput } from '../../components/atoms/MultilineTextInput';
import { DateRangeInput } from '../../components/atoms/DateRangeInput';
import { Button } from '../../components/atoms/button';
import { Priority } from "../../components/molecules/Priority"
import { Categories } from '../../components/molecules/Categories';
import { Toggle } from '../../components/atoms/Toggle';
import { useMainContext } from '../../hooks/useMainContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/RootStackParams';
import { useFormik } from 'formik';
import * as Yup from 'yup';



type createScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>

const Schema = Yup.object({
  title: Yup.string().max(10, 'O máximo  de caractéres foi atingido').required('O campo é obrigatório'),
  description: Yup.string().max(5, 'O máximo  de caractéres foi atingido')
})

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
    },
    validationSchema: Schema
  })

  return (
    <Container onTouchStart={()=>Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{padding:16}}>
        <Form>
          <InputField
            label='Título*'
            onChangeText={form.handleChange('title')}
            value={form.values.title}
            error={form.errors.title}
          />

          <MultilineTextInput
            label='Descrição'
            isCreateTask={true}
            onChangeText={form.handleChange('description')}
            value={form.values.description}
            error={form.errors.description}
          />
          <ContainerInputDate>
            <DateRangeInput isCreateTask={true}/>
          </ContainerInputDate>
          <ContainerInputDate>
            <DateRangeInput isCreateTask={true}/>
          </ContainerInputDate>

          <Toggle/>
          <Priority/>
          <Categories/>

        </Form>
        
      </KeyboardAvoidingView>
      <ContainerButton>
        <Button label='Salvar' disabled={form.isValidating} action={form.handleSubmit}/>
      </ContainerButton>
    </Container>
  )
}
