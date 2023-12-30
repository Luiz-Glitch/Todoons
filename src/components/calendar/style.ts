import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    margin-top: 16px;
`

export const TextToday = styled.Text`
    color: ${({theme}) => theme.colors.gray[50]};
    background-color: ${({theme}) => theme.colors.gray[700]};
    font-size: ${({theme}) => theme.fontSize.md};
    padding: 4px 8px;
    border-radius: 8px;
`

export const TextNotToday = styled.Text`
    color: ${({theme}) => theme.colors.gray[50]};
    background-color: ${({theme}) => theme.colors.gray[200]};
    font-size: ${({theme}) => theme.fontSize.md};
    padding: 4px 8px;
    border-radius: 8px;
`