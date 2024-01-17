import React from "react";
import { Input } from "../../atoms/input";
import { Container, Label } from "./style";
import { TextInputProps } from "react-native";

interface props extends TextInputProps{
    label: string
}

export function InputField({label, ...props}: props){
    return (
        <Container>
            <Label>{label}</Label>
            <Input placeholder="Digite aqui" {...props} />
        </Container>
    )
}