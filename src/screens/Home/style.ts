import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`

export const ContainerHeaderCalendar = styled.View`
    gap: 16px;
`

export const ContainerButton = styled.View`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 8px 16px;
    background-color: ${({theme}) => theme.colors.gray[50]};
`

export const ContainerTask = styled.View`
    margin-top: 16px;
    padding: 16px;
    gap: 12px;
    background-color: ${({theme}) => theme.colors.primary[100]};
    margin-bottom: 60px;
`