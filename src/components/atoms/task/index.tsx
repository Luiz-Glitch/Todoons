import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, PanResponder, Text, TouchableOpacity, View} from 'react-native';

import {
  Container,
  ContainerDeleteTask,
  Check,
  CicleOff,
  CicleOn,
  ContainerMain,
  ContainerData,
  ContainerIcon,
  ContainerText,
  TextCategory,
  TextDate,
  TextIcon,
} from './style';
import { useMainContext } from '../../../hooks/useMainContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface text {
  name: string;
  id: number;
}

export function Task({ name, id }: text) {
  const [checked, setChecked] = useState(false);
  const { deleteTask } = useMainContext()
  if (name.length > 22) {
    let msg = '';
    for (let i = 0; i < 22; i++) {
      msg += name[i];
    }
    name = msg + '...';
  }

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Container
        renderRightActions={() => {
          return (
            <ContainerDeleteTask>
              <Feather name="trash" size={24} color="white"/>
            </ContainerDeleteTask>
          )
        }}
        onSwipeableOpen={() => deleteTask(id)}
        overshootRight={false}
        friction={1}
      >
        <ContainerMain>
          <TouchableOpacity></TouchableOpacity>
          <Check onPress={()=>{handleChecked()}}>
            {checked ? (
              <CicleOn>
                <AntDesign name="check" size={14} color="green" />
              </CicleOn>
            ) : (
              <CicleOff />
            )}
          </Check>
          <ContainerData>
            <ContainerText>
              <Text>{name}</Text>
              <ContainerIcon>
                <TextCategory>Categoria-1</TextCategory>
                <TextIcon>
                  <AntDesign name="tago" size={16} color="white" /> + 3
                </TextIcon>
              </ContainerIcon>
            </ContainerText>
            <TextDate>
              <EvilIcons name="calendar" size={14} color="black" />
              20/03
            </TextDate>
          </ContainerData>
        </ContainerMain>
      </Container>
    </GestureHandlerRootView>
  );
}
