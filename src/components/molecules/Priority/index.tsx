import { AntDesign } from '@expo/vector-icons';
import { Control } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { Container, ContainerGeral, Titulo } from './style';
import { TaskPriority } from '../../../utils/taskOptions';
import { DropDownMenu } from '../../DropDownMenu';
import React from 'react';

interface PriorityProps {
  name: string;
  control: Control<any>;
}

export const Priority = ({ name, control }: PriorityProps) => {
  return (
    <ContainerGeral style={Styles.ContainerGeral}>
      <Container>
        <AntDesign name="flag" size={24} color="gray" />
        <Titulo>Prioridade</Titulo>
      </Container>
      <View style={{ borderRadius: 8 }}>
        <DropDownMenu
          name={name}
          control={control}
          options={TaskPriority.options}
          placeholder="Escolha uma prioridade para a tarefa"
        />
      </View>
    </ContainerGeral>
  );
};

const Styles = StyleSheet.create({
  ContainerGeral: {
    flex: 1,
  },
});
