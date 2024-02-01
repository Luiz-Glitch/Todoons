import styled from "styled-components/native";

export const Container = styled.View``

export const Label = styled.Text`
    font-size: ${({theme}) => theme.texts.bodyP3Regular.fontSize}px;
    font-weight: 500;
    margin-bottom: 8px;
`

export const TextError = styled.Text`
    color: ${({theme}) => theme.colors.error[500]};
    font-size: 16px;
`