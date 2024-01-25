import styled from "styled-components/native";

export const Container=styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    gap:4px;
`;
export const ContainerGeral=styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap: 45px;
`
export const Titulo=styled.Text`
    color:${({theme})=>theme.colors.gray[500]};
    font-weight:500;
    font-size:16px;
`;