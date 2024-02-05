import { error } from 'console';
import { Control, useController } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Container, Input, Label, TextError } from './styles';

interface MultilineTextInputProps {
  name: string;
  control: Control<any>;
  label: string;
  isCreateTask: boolean;
}

export function MultilineTextInput({
  name,
  control,
  label,
  isCreateTask,
}: MultilineTextInputProps) {
  const { field, fieldState } = useController({ name, control });

  return (
    <Container>
      <Label>{label}</Label>

      <Input
        multiline
        numberOfLines={4}
        placeholder="Digite uma descrição aqui"
        onChangeText={(text) => field.onChange(text)}
        onBlur={field.onBlur}
        isCreateTask={isCreateTask}
        textAlignVertical="top"
      />
      {fieldState.error && <TextError>{fieldState.error.message}</TextError>}
    </Container>
  );
}
