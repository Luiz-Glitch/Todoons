import React, { useState} from "react";
import { Switch } from "react-native";
import {Container, Titulo, ContainerGeral} from "./style"
import { AntDesign } from '@expo/vector-icons';

interface ToggleProps {
    value: boolean;
    setValue: (field: string, value: any) => void;
}

export const Toggle = ({value, setValue}: ToggleProps)=>{
    const [isEnabled, setIsEnable] = useState(value);

    return(
        <ContainerGeral>
            <Container>
                <AntDesign name="pushpino" size={24} color="gray"/>
                <Titulo>Destaque</Titulo>
            </Container>
            <Switch
                onValueChange={() => {
                    setIsEnable(!isEnabled)
                    setValue('emphasis', !isEnabled)
                }}
                value={isEnabled}
            />
        </ContainerGeral>
    )
};