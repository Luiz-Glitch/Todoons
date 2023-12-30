import React from "react";
import { Container, TextNotToday, TextToday } from "./style";
import { View } from "react-native";

export function Calendar(){

    const today = new Date().getDate()
    const listDay = [today-2, today-1, today, today+1, today+2]
    console.log(listDay)
    return (
        <Container>
            { listDay.map((day, index) => (
                <View key={index}>
                    {index == 2?
                    <TextToday>{day}</TextToday>
                    :
                    <TextNotToday>{day}</TextNotToday>
                    }
                </View>
            ))}
        </Container>
    )
}