import React from 'react';
import { View, Text } from 'react-native';

import { Container, ContainerDay, TextMonth, TextNotToday, TextToday } from './style';

// Falta criar a lógica para Fevereiro, mas estou com preguiça😭 (Depois eu faço😊)

export function Calendar() {
  const today = new Date().getDate();
  const monthNumber = new Date().getMonth();
  // const today = 1
  // const monthNumber = 11

  const monthList = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const month = monthList[monthNumber];

  const month31 = [0, 2, 4, 6, 7, 9, 11];
  let is31 = false;
  let isPast31 = false;
  let listDay = [today - 2, today - 1, today, today + 1, today + 2];

  if (month31.includes(monthNumber)) is31 = true;

  if (
    (monthNumber <= 7 && monthNumber % 2 == 1) ||
    (monthNumber > 7 && monthNumber % 2 == 0) ||
    monthNumber == 0
  )
    isPast31 = true;

  switch (today) {
    case 1:
      if (isPast31) listDay = [30, 31, today, today + 1, today + 2];
      else listDay = [29, 30, today, today + 1, today + 2];
      break;
    case 2:
      if (isPast31) listDay = [31, 1, today, today + 1, today + 2];
      else listDay = [30, 1, today, today + 1, today + 2];
      break;
    case 29:
      if (!is31) listDay = [today - 2, today - 1, today, today + 1, 1];
      break;
    case 30:
      if (is31) listDay = [today - 2, today - 1, today, today + 1, 1];
      else listDay = [today - 2, today - 1, today, 1, 2];
      break;
    case 31:
      listDay = [today - 2, today - 1, today, 1, 2];
      break;
  }

  return (
    <Container>
      <TextMonth>{month}</TextMonth>
      <ContainerDay>
        {listDay.map((day, index) => (
          <View key={index}>
            {index == 2 ? <TextToday>{day}</TextToday> : <TextNotToday>{day}</TextNotToday>}
          </View>
        ))}
      </ContainerDay>
    </Container>
  );
}
