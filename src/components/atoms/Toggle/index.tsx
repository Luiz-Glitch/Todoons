import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import { Switch } from 'react-native';

import { Container, Titulo, ContainerGeral } from './style';

interface ToggleProps {
  name: string;
  control: Control<any>;
}

export const Toggle = ({ name, control }: ToggleProps) => {
  const { field } = useController({ name, control });

  return (
    <ContainerGeral>
      <Container>
        <AntDesign name="pushpino" size={24} color="gray" />
        <Titulo>Destaque</Titulo>
      </Container>
      <Switch onValueChange={() => field.onChange(!field.value)} value={field.value} />
    </ContainerGeral>
  );
};
