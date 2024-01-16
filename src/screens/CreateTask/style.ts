import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    padding: 16px;
`

export const Form = styled.View`
    background-color: ${({theme}) => theme.colors.primary[100]};
    border-radius: 16px;
    padding: 16px;
    gap: 16px;
`