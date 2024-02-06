import { error } from 'console';
import { Control, useController } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Container, Input, Label, TextError } from './styles';
import theme from '../../style/theme';

interface MultilineTextInputProps {
  name: string;
  control: Control<any>;
  label: string;
  isCreateTask?: boolean;
  placeholder?: string;
}

export function MultilineTextInput({
  name,
  control,
  label,
  isCreateTask = false,
  placeholder = 'Digite aqui',
}: MultilineTextInputProps) {
  const { field, fieldState } = useController({ name, control });

  return (
    <Container>
      <Label isCreateTask={isCreateTask}>{label}</Label>

      <Input
        multiline
        numberOfLines={4}
        placeholder={placeholder}
        onChangeText={(text) => field.onChange(text)}
        onBlur={field.onBlur}
        isCreateTask={isCreateTask}
        placeholderTextColor={!isCreateTask ? theme.colors.gray[300] : ''}
        textAlignVertical="top"
      />
      {fieldState.error && <TextError>{fieldState.error.message}</TextError>}
    </Container>
  );
}
