import { AntDesign } from '@expo/vector-icons';

import { Container, ContainerGeral, Titulo, AddTag } from './style';

export const Categories = () => {
  return (
    <ContainerGeral>
      <Container>
        <AntDesign name="tagso" size={24} color="gray" />
        <Titulo>Categorias</Titulo>
      </Container>

      <AddTag />
    </ContainerGeral>
  );
};
