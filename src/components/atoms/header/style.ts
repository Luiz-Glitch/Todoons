import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 0px 0px 12px 12px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray[50]};
  font-size: ${({ theme }) => theme.texts.headingH2Regular.fontSize}px;
  font-weight: bold;
`;

export const ContainerText = styled.View`
  flex-direction: row;
`;

export const TextNormal = styled.Text`
  color: ${({ theme }) => theme.colors.gray[50]};
  font-size: ${({ theme }) => theme.texts.bodyP3Regular.fontSize}px;
`;

export const TextBold = styled.Text`
  color: ${({ theme }) => theme.colors.gray[50]};
  font-size: ${({ theme }) => theme.texts.bodyP3Regular.fontSize}px;
  font-weight: bold;
`;
