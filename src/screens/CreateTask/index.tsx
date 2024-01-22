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

type createScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>

export function CreateTaskScreen() {
  const { createTask } = useMainContext()

  const navigation = useNavigation<createScreenProp>()

  return (
    <Container onTouchStart={()=>Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{padding:16}}>
        <Form>
          <InputField label='Título'/>
          <MultilineTextInput label='Descrição' isCreateTask={true}/>
          <ContainerInputDate>
            <DateRangeInput isCreateTask={true}/>
          </ContainerInputDate>
        </Form>
      </KeyboardAvoidingView>
      <ContainerButton>
        <Button label='Salvar' action={() => {
          createTask({id:0, title:'Fazer atividade'});
          navigation.navigate('Home')
        }}/>
      </ContainerButton>
    </Container>
  )
}
