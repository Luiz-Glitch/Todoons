import React, { useState } from "react";
import { Switch } from "react-native";
import {Container, Titulo, ContainerGeral} from "./style"
import { AntDesign } from '@expo/vector-icons';

export const Toggle = ()=>{
    const [isEnabled, setIsEnable] = useState(false);
    const toggleSwitch= ()=> setIsEnable(previousState=>!previousState);

    return(
        <ContainerGeral>
            <Container>
                <AntDesign name="pushpino" size={24} color="gray"/>
                <Titulo>Destaque</Titulo>
            </Container>
            <Switch onValueChange={toggleSwitch} value={isEnabled}/>
        </ContainerGeral>
    )
};