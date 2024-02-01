import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, TextError } from './style';
import { Input } from '../../atoms/input';

interface props extends TextInputProps {
  label: string;
  error: string | undefined;
}

export function InputField({ label, error, ...props }: props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input placeholder="Digite aqui" {...props} />
      {error && <TextError>{error}</TextError>}
    </Container>
  );
}
