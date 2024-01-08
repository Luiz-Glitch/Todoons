import React from "react";
import { Container } from "./style";
import { Text } from "react-native";

interface TaskProps {
    id: number,
    title: string,
    categories: [],
    date_final: Date,
    date_initial: Date,
    checked?: boolean
}

export function Task(props:TaskProps ){
    return (
        <Container>
            <Text>Tarefa</Text>
        </Container>
    )
}