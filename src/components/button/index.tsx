import React from "react";
import { ButtonStyle, TextStyle } from "./style";

interface ButtonProps {
    label: string,
    action?: () => void
}

export function Button(props:ButtonProps){
    return (
        <ButtonStyle onPress={props.action}>
            <TextStyle>{props.label}</TextStyle>
        </ButtonStyle>
    )
}