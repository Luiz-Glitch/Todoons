import styled from 'styled-components/native';

import theme from '../../../style/theme';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-size: ${({theme}) => theme.texts.bodyP3Regular.fontSize}px;
  font-weight: 500;
  margin-bottom: 8px;
`

export const Input = styled.TextInput<{
  isCreateTask: boolean
}>`
  /* ${theme.texts.bodyP4Regular}; */

  background-color: ${({isCreateTask, theme}) => (isCreateTask? theme.colors.primary[50]:'transparent')};
  color: ${({isCreateTask, theme}) => (isCreateTask? theme.colors.gray[900]:theme.colors.gray[600])};

  border-radius: 8px;
  padding: 8px;
`;

export const TextError = styled.Text`
  color: ${({theme}) => theme.colors.error[500]};
  font-size: 16px;
`