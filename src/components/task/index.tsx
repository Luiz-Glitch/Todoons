import React, { useState } from "react";
import { Check, CicleOff, CicleOn, Container, ContainerData, ContainerIcon, ContainerText, TextCategory, TextDate, TextIcon } from "./style";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign, EvilIcons } from '@expo/vector-icons';

interface TaskProps {
    id: number,
    title: string,
    categories: [],
    date_final: Date,
    date_initial: Date,
    checked?: boolean
}

interface text {
    name: string
}

export function Task({name}: text ){
    const [checked, setChecked] = useState(false)
    if (name.length > 22){
        let msg = ''
        for (let i = 0; i < 22; i++ ){
            msg += name[i]
        }
        name = msg + '...'
    }

    const handleChacked = () => {
        setChecked(!checked)
    }

    return (
        <Container>
            <TouchableOpacity></TouchableOpacity>
            <Check onPress={handleChacked}>
                {checked?
                <CicleOn><AntDesign name="check" size={14} color="green" /></CicleOn>
                :
                <CicleOff></CicleOff>}
            </Check>
            <ContainerData>
                <ContainerText>
                    <Text>{name}</Text>
                    <ContainerIcon>
                        <TextCategory>Categoria-1</TextCategory>
                        <TextIcon><AntDesign name="tago" size={16} color="white"/> + 3</TextIcon>
                    </ContainerIcon>
                </ContainerText>
                <TextDate><EvilIcons name="calendar" size={14} color="black" />20/03</TextDate>
            </ContainerData>
        </Container>
    )
}