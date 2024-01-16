import React from "react";
import { InputStyle } from "./style";
import { TextInputProps } from "react-native";

export function Input(props: TextInputProps) {
    return (
        <InputStyle {...props} />
    )
}