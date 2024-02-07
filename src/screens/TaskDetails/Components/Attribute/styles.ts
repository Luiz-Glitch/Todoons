import styled from 'styled-components/native';

import theme from '../../../../style/theme';

export const Container = styled.View`
  height: 40px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.gray[100]};
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Content = styled.View`
  flex: 2;
  justify-content: center;
`;

export const Title = styled.Text`
  ${theme.texts.bodyP3Regular}
  color: ${theme.colors.gray[600]};
`;
