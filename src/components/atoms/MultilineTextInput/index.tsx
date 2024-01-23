import { Container, Input, Label } from './styles';
import { TextInputProps } from 'react-native';

interface MultilineTextInputProps extends TextInputProps{
  label: string;
  isCreateTask?: boolean;
}

export function MultilineTextInput({ label, isCreateTask=false, ...props }: MultilineTextInputProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <Input
        multiline
        numberOfLines={4}
        placeholder="Digite uma descrição aqui"
        isCreateTask={isCreateTask}
        textAlignVertical='top'
        {...props}
      />
    </Container>
  );
}
