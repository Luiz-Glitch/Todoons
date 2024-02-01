import React from 'react';
import { Control, useController } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Container, ErrorText, Input } from './styles';

interface TitleInputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
}

export function TitleInput({
  name,
  control,
  placeholder = 'Adicione um título',
  ...props
}: TitleInputProps) {
  const { field, fieldState } = useController({ name, control });

  return (
    <Container>
      <Input placeholder={placeholder} onTextInput={(text) => field.onChange(text)} {...props}>
        {field.value}
      </Input>
      {fieldState.error && <ErrorText>{fieldState.error.message}</ErrorText>}
    </Container>
  );
}
