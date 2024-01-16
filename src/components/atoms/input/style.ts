import styled from "styled-components/native";

export const InputStyle = styled.TextInput`
    background-color: ${({theme}) => theme.colors.primary[50]};
    color: ${({theme}) => theme.colors.gray[900]};
    border-radius: 8px;
    padding: 8px;
`