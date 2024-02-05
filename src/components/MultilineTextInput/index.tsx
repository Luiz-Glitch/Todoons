import { Control, useController } from 'react-hook-form';

import { Container, Input, Label } from './styles';

interface MultilineTextInputProps {
  label: string;
  name: string;
  control: Control<any>;
  placeholder?: string;
}

export function MultilineTextInput({
  label,
  name,
  control,
  placeholder = 'Digite um texto aqui',
}: MultilineTextInputProps) {
  const { field } = useController({ name, control });

  return (
    <Container>
      <Label>{label}</Label>

      <Input
        multiline
        numberOfLines={4}
        placeholder={placeholder}
        onChangeText={(text) => field.onChange(text)}
      />
    </Container>
  );
}
