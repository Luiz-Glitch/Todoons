import React, { useState } from "react";
import { Container, ContainerText, TextBold, TextNormal, Title } from "./style";
import { View } from "react-native";

export function Header(){
    // Acho que esse valor vem de um context
    const [ tarefas, setTarefas ] = useState(0)

    return (
    <Container>
        <Title>Bom dia</Title>
        <ContainerText>
            <TextNormal>Você tem </TextNormal>
            <TextBold>{tarefas} tarefas pendentes</TextBold>
        </ContainerText>
    </Container>
    )
}