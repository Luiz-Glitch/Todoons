import { Container, Input, Label } from './styles';

interface MultilineTextInputProps {
  label: string;
  isCreateTask?: boolean;
}

export function MultilineTextInput({ label, isCreateTask=false }: MultilineTextInputProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <Input
        multiline
        numberOfLines={4}
        placeholder="Digite uma descrição aqui"
        isCreateTask={isCreateTask}
        textAlignVertical='top'
      />
    </Container>
  );
}
