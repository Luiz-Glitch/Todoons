import styled from 'styled-components/native';

import theme from '../../style/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary[50]};
  padding: 24px;
  gap: 24px;
`;

export const Header = styled.View`
  gap: 16px;
`;

export const NavBar = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  display: flex;
  gap: 20px;
`;

export const AttributesContainer = styled.View`
  display: flex;
`;
