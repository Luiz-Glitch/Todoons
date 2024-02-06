import React from 'react';
import { Control, useController } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Container, ErrorText, Input } from './styles';
import theme from '../../style/theme';

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
      <Input
        placeholder={placeholder}
        onBlur={field.onBlur}
        placeholderTextColor={theme.colors.gray[300]}
        multiline
        value={field.value}
        onChangeText={field.onChange}
        {...props}
      />
      {fieldState.error && <ErrorText>{fieldState.error.message}</ErrorText>}
    </Container>
  );
}
