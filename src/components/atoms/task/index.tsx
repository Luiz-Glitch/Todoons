import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

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
import { TaskProps } from '../../../contexts/main';


export function Task({task}: {task:TaskProps}) {
  const [checked, setChecked] = useState(false);
  const { deleteTask } = useMainContext()
  if (task.title.length > 22) {
    let msg = '';
    for (let i = 0; i < 22; i++) {
      msg += name[i];
    }
    task.title = msg + '...';
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
        onSwipeableOpen={() => deleteTask(task)}
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
              <Text>{task.title}</Text>
              <ContainerIcon>
                <TextCategory>Categoria-1</TextCategory>
                <TextIcon>
                  <AntDesign name="tago" size={16} color="white" /> + 3
                </TextIcon>
              </ContainerIcon>
            </ContainerText>
            <TextDate>
              <EvilIcons name="calendar" size={14} color="black" />
              {task.term}
            </TextDate>
          </ContainerData>
        </ContainerMain>
      </Container>
    </GestureHandlerRootView>
  );
}
