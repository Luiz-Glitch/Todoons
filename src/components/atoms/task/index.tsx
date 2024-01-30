import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, PanResponder, Text, TouchableOpacity, View} from 'react-native';

import {
  Container,
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
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../../navigators/RootStackParams';

interface text {
  name: string;
  id: number;
}

type HomeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>

export function Task({ name, id }: text) {
  const [checked, setChecked] = useState(false);
  const { deleteTask } = useMainContext()
  const navigation = useNavigation<HomeScreenProp>()
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

  const animation = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: animation.x, // x,y are Animated.Value
        dy: animation.y,
      }],{
        useNativeDriver: false
      }),
    onPanResponderRelease: () => {
      Animated.spring(
        animation, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: true}, // Back to zero
      ).start();
      
    },
    onPanResponderEnd: () => {
      deleteTask(id)
    }
  });

  return (
    <Container>
      <ContainerMain {...panResponder.panHandlers} style={{translateX: animation.x}}>
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
      <View style={{position:'absolute', display:'flex', alignItems:'flex-end', width:'100%', justifyContent:'center', zIndex:-1, height:'100%', paddingRight:16}}>
        <Feather name="trash" size={24} color="white"/>
      </View>
    </Container>
  );
}
