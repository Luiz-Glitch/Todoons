import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import React, { useMemo, useRef, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
  DateContainer,
  ContainerDetailScreen,
} from './style';
import { TaskProps } from '../../../contexts/main';
import { useMainContext } from '../../../hooks/useMainContext';
import { formatDateRange } from '../../../utils/dateUtils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../../navigators/RootStackParams';

type detailScreenProp = NativeStackNavigationProp<RootStackParamsList, 'DetailTask'>;

export function Task({ task }: { task: TaskProps }) {
  const { deleteTask, checkTask } = useMainContext();

  const navigation = useNavigation<detailScreenProp>()

  const displayedTitleText = useMemo(() => {
    if (task.title.length > 22) {
      let text = '';
      for (let i = 0; i < 22; i++) {
        text += task.title[i];
      }
      text += '...';
      return text;
    }
    return task.title;
  }, [task.title]);

  const refTask = useRef(null)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Container
        ref={refTask}
        renderRightActions={() => {
          return (
            <ContainerDeleteTask>
              <Feather name="trash" size={24} color="white" />
            </ContainerDeleteTask>
          );
        }}
        renderLeftActions={() => 
        <ContainerDetailScreen>
          <Feather name="edit" size={24} color="black" />
        </ContainerDetailScreen>}
        onSwipeableOpen={(direction) => {
          if (direction === 'left'){
            navigation.navigate('DetailTask')
          } else {
            deleteTask(task);
          }

          refTask.current?.reset()
        }}
        overshootRight={false}
        overshootLeft={false}
        friction={1}>
        <ContainerMain>
          <TouchableOpacity />
          <Check onPress={() => checkTask(task)}>
            {task.check ? (
              <CicleOn>
                <AntDesign name="check" size={14} color="green" />
              </CicleOn>
            ) : (
              <CicleOff />
            )}
          </Check>
          <ContainerData>
            <ContainerText>
              <Text>{displayedTitleText}</Text>
              <ContainerIcon>
                <TextCategory>Categoria-1</TextCategory>
                <TextIcon>
                  <AntDesign name="tago" size={16} color="white" /> + 3
                </TextIcon>
              </ContainerIcon>
            </ContainerText>
            <DateContainer>
              <EvilIcons name="calendar" size={14} color="black" />
              {task.dates?.startDate && task.dates.endDate ? (
                <TextDate>
                  {formatDateRange({
                    startDate: new Date(task.dates.startDate),
                    endDate: new Date(task.dates.endDate),
                  })}
                </TextDate>
              ) : (
                <TextDate>Sem data</TextDate>
              )}
            </DateContainer>
          </ContainerData>
        </ContainerMain>
      </Container>
    </GestureHandlerRootView>
  );
}
