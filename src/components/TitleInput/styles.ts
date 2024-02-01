import styled from 'styled-components/native';

import theme from '../../style/theme';

export const Container = styled.View`
  width: 100%;
`;

export const Input = styled.TextInput`
  ${theme.texts.headingH1Bold};
  color: ${theme.colors.gray[900]};
`;

export const ErrorText = styled.Text`
  ${theme.texts.bodyP4Light};
  color: ${theme.colors.error[500]};
  margin-top: 4px;
`;
