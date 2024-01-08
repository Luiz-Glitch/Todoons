import React from "react";
import { Check, Cicle, Container, ContainerData, ContainerIcon, ContainerText, TextCategory, TextDate, TextIcon } from "./style";
import { Text } from "react-native";
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
    if (name.length > 22){
        let msg = ''
        for (let i = 0; i < 22; i++ ){
            msg += name[i]
        }
        name = msg + '...'
    }

    

    return (
        <Container>
            <Check>
                <Cicle></Cicle>
            </Check>
            <ContainerData>
                <ContainerText>
                    <Text>{name}</Text>
                    <ContainerIcon>
                        <TextCategory>Categoria-1</TextCategory>
                        <TextIcon><AntDesign name="tago" size={16} color="white"/> + 3</TextIcon>
                    </ContainerIcon>
                </ContainerText>
                <TextDate><EvilIcons name="calendar" size={16} color="black" />20/03</TextDate>
            </ContainerData>
        </Container>
    )
}