import React from 'react';
import { Control, useController } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Container, Label, TextError } from './style';
import { Input } from '../../atoms/input';

interface InputFieldProps {
  name: string;
  control: Control<any>;
  label: string;
}

export function InputField({ name, control, label }: InputFieldProps) {
  const { field, fieldState } = useController({ name, control });

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        placeholder="Digite aqui"
        onChangeText={(text) => field.onChange(text)}
        onBlur={field.onBlur}
      />
      {fieldState.error && <TextError>{fieldState.error.message}</TextError>}
    </Container>
  );
}
