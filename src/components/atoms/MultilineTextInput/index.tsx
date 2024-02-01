import { TextInputProps } from 'react-native';

import { Container, Input, Label, TextError } from './styles';

interface MultilineTextInputProps extends TextInputProps {
  label: string;
  isCreateTask?: boolean;
  error: string | undefined;
}

export function MultilineTextInput({
  label,
  error,
  isCreateTask = false,
  ...props
}: MultilineTextInputProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <Input
        multiline
        numberOfLines={4}
        placeholder="Digite uma descrição aqui"
        isCreateTask={isCreateTask}
        textAlignVertical="top"
        {...props}
      />
      {error && <TextError>{error}</TextError>}
    </Container>
  );
}
