import { Container, Input, Label } from './styles';

interface MultilineTextInputProps {
  label: string;
}

export function MultilineTextInput({ label }: MultilineTextInputProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <Input
        multiline
        numberOfLines={4}
        placeholder="Digite uma descrição aqui"
      />
    </Container>
  );
}
