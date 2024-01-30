import styled from 'styled-components/native';

import theme from '../../../style/theme';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  gap: 8px;
`;

export const Label = styled.Text`
  ${theme.texts.bodyP2Bold}
  color: ${theme.colors.gray[600]};
`;

export const Input = styled.TextInput`
  ${theme.texts.bodyP4Regular};
  color: ${theme.colors.gray[600]};
  text-align-vertical: top;
  height: 100%;
`;
