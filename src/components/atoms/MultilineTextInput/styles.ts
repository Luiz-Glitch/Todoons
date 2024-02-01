import styled from 'styled-components/native';

import theme from '../../../style/theme';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  ${theme.texts.bodyP2Bold}
  color: ${theme.colors.gray[600]};
`;

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