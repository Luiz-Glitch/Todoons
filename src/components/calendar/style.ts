import styled from "styled-components/native";

export const Container = styled.View`
    gap: 8px;
    align-items: center;
    /* margin-top: 16px; */
    /* Acho que o esse margin não deve ficar no componente, e sim na tela onde vai ser utilizado */
`

export const ContainerDay = styled.View`
    flex-direction: row;
    gap: 8px;
    justify-content: center;
`

export const TextMonth = styled.Text`
    font-weight: 700;
    font-size: ${({theme}) => theme.fontSize.sm} px;
`

export const TextToday = styled.Text`
    width: 42px;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[50]};
    background-color: ${({theme}) => theme.colors.gray[700]};
    font-size: ${({theme}) => theme.fontSize.md} px;
    padding: 4px 0px;
    border-radius: 8px;
`

export const TextNotToday = styled.Text`
    width: 42px;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[50]};
    background-color: ${({theme}) => theme.colors.gray[200]};
    font-size: ${({theme}) => theme.fontSize.md};
    padding: 4px 0px;
    border-radius: 8px;
`