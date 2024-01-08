import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    background-color: white;
    padding: 8px;
    border-radius: 8px;
`

export const ContainerData = styled.View`
    flex-basis: 90%;
`

export const ContainerText = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerIcon = styled.View`
    flex-direction: row;
    gap: 4px;
`

export const TextCategory = styled.Text`
    padding: 2px 4px;
    font-size: ${({theme}) => theme.fontSize.xs}px;
    background-color: ${({theme}) => theme.colors.secundary[300]};
    border-radius: 8px;
`

export const TextIcon = styled.Text`
    background-color: ${({theme}) => theme.colors.secundary[800]};
    padding: 2px 8px;
    border-radius: 8px;
    color: ${({theme}) => theme.colors.gray[50]};
    text-align: center;
`

export const TextDate = styled.Text`
    font-size: ${({theme}) => theme.fontSize.xs}px;
`

export const Check = styled.TouchableOpacity`
    flex-basis: 10%;
    align-items: center;
    justify-content: center;
`

export const Cicle = styled.View`
    border: 1px solid black;
    width: 20px;
    height: 20px;
    border-radius: 10px;
`