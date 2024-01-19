import styled from 'styled-components/native';

import theme from '../../../style/theme';

export const DateButton = styled.TouchableOpacity`
  width: 100%;
  padding-horizontal: 8px;
`;

export const DateText = styled.Text`
  ${theme.texts.bodyP3Bold}
  color: ${theme.colors.gray[900]};
`;

export const Placeholder = styled.Text`
  ${theme.texts.bodyP3Regular};
  color: ${theme.colors.gray[400]};
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;
