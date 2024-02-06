import { ColorValue } from 'react-native';
import styled from 'styled-components/native';

import theme from '../../style/theme';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text<{
  isCreateTask: boolean;
}>`
  ${({ isCreateTask }) => (isCreateTask ? '' : theme.texts.bodyP2Bold)};
  color: ${({ isCreateTask }) => (isCreateTask ? 'black' : theme.colors.gray[600])};
  font-weight: ${({ isCreateTask }) => (isCreateTask ? 500 : theme.texts.bodyP2Bold.fontWeight)};
  margin-bottom: 8px;
`;

export const Input = styled.TextInput<{
  isCreateTask: boolean;
}>`
  ${({ isCreateTask }) => (isCreateTask ? '' : theme.texts.bodyP4Regular)};
  background-color: ${({ isCreateTask, theme }) =>
    isCreateTask ? theme.colors.primary[50] : 'transparent'};
  color: ${({ theme }) => theme.colors.gray[900]};
  padding: ${({ isCreateTask }) => (isCreateTask ? '8px' : '0px')};
  border-radius: 8px;
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.colors.error[500]};
  font-size: 16px;
`;
