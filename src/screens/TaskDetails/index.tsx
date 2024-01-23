import { Image } from 'expo-image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { Attribute } from './Components/Attribute';
import { AttributesContainer, Container, Content, Header, NavBar, Title } from './styles';
import { DateRangeInput } from '../../components/DateRangeInput';
import { DropDownMenu } from '../../components/DropDownMenu';
import { MultilineTextInput } from '../../components/MultilineTextInput';
import { IconButton } from '../../components/atoms/iconButton';
import { Input } from '../../components/atoms/input';

export function TaskDetailsScreen() {
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  return (
    <Container>
      <Header>
        <NavBar>
          <IconButton
            source={require('../../../assets/purple-left-arrow.svg')}
            size={20}
            Icon={null}
            onPress={() => {}}
          />
          <IconButton
            source={require('../../../assets/purple-three-dots.svg')}
            size={20}
            Icon={null}
            onPress={() => {}}
          />
        </NavBar>
        <Title>Fazer a atividade de matemática</Title>
      </Header>

      <Content>
        <AttributesContainer>
          <Attribute
            title="Status"
            Icon={<Image source={require('./assets/circle-icon.svg')} style={styles.icon} />}
            ValueComponent={() => <DropDownMenu data={options} />}
          />
          <Attribute
            title="Destaque"
            Icon={<Image source={require('./assets/pin-icon.svg')} style={styles.icon} />}
            ValueComponent={() => <View style={{ flex: 1, backgroundColor: '#70F', padding: 8 }} />}
          />
          <Attribute
            title="Prioridade"
            Icon={<Image source={require('./assets/flag-icon.svg')} style={styles.icon} />}
            ValueComponent={() => <DropDownMenu data={options} />}
          />
          <Attribute
            title="Categoria"
            Icon={<Image source={require('./assets/tag-icon.svg')} style={styles.icon} />}
            ValueComponent={() => <View style={{ flex: 1, backgroundColor: '#70F', padding: 8 }} />}
          />
          <Attribute
            title="Data"
            Icon={<Image source={require('./assets/calendar-icon.svg')} style={styles.icon} />}
            ValueComponent={() => <DateRangeInput />}
          />
        </AttributesContainer>

        <MultilineTextInput label="Descrição" />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
  },
});
