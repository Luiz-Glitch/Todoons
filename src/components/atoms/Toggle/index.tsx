import React, { useState, useContext} from "react";
import { Switch } from "react-native";
import {Container, Titulo, ContainerGeral} from "./style"
import { AntDesign } from '@expo/vector-icons';
import { MainContext } from "../../../contexts/main";

export const Toggle = ()=>{
    const { emphasis, toggleEmphasis } = useContext(MainContext);
    const [isEnabled, setIsEnable] = useState(false);
    const toggleSwitch= ()=> {
        setIsEnable(previousState=>!previousState);
        toggleEmphasis();
    }

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