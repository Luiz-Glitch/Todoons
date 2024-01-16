import React from 'react';
import { Container, Form } from './style';
import { KeyboardAvoidingView, View, Keyboard } from 'react-native';
import { InputField } from '../../components/molecules/InputField';

export function CreateTaskScreen() {
  return (
    <View onTouchStart={()=>Keyboard.dismiss()} style={{flex: 1, width: "100%"}}>
      <KeyboardAvoidingView>
        <Container>
          <Form>
            <InputField label='Título' />
            <InputField label='Descrição' />
          </Form>
        </Container>
      </KeyboardAvoidingView>
    </View>
  )
}
