import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import { Container, ContainerGeral, Titulo } from './style';
import { DropDownMenu } from '../../atoms/DropDownMenu';

export const Priority = () => {
  return (
    <ContainerGeral style={Styles.ContainerGeral}>
      <Container>
        <AntDesign name="flag" size={24} color="gray" />
        <Titulo>Prioridade</Titulo>
      </Container>
      <DropDownMenu data={[]} />
    </ContainerGeral>
  );
};

const Styles = StyleSheet.create({
  ContainerGeral: {
    flex: 1,
  },
});
