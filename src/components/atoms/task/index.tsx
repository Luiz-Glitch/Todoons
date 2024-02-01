import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import React, { useMemo, useState } from 'react';
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
} from './style';
import { TaskProps } from '../../../contexts/main';
import { useMainContext } from '../../../hooks/useMainContext';
import { formatDateRange } from '../../../utils/dateUtils';

export function Task({ task }: { task: TaskProps }) {
  const { deleteTask } = useMainContext();
  const [checked, setChecked] = useState(false);

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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Container
        renderRightActions={() => {
          return (
            <ContainerDeleteTask>
              <Feather name="trash" size={24} color="white" />
            </ContainerDeleteTask>
          );
        }}
        onSwipeableOpen={() => deleteTask(task)}
        overshootRight={false}
        friction={1}>
        <ContainerMain>
          <TouchableOpacity />
          <Check onPress={() => setChecked(!checked)}>
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
