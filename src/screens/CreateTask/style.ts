import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`

export const Form = styled.View`
    background-color: ${({theme}) => theme.colors.primary[100]};
    border-radius: 16px;
    padding: 16px;
    gap: 16px;
`

export const ContainerInputDate = styled.View`
    flex-direction: row;
    gap: 16px;
`

export const ContainerButton = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;