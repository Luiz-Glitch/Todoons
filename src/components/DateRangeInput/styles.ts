import styled from 'styled-components/native';

import theme from '../../style/theme';

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

export const CalendarContainer = styled.View<{
  relativeHeight: number;
  relativeWidth: number;
  width: number;
  showShadow: boolean;
}>`
  display: flex;
  width: ${({ width }) => `${width}px`};
  position: absolute;
  top: ${({ relativeHeight }) => `${relativeHeight}px`};
  left: ${({ relativeWidth }) => `${relativeWidth}px`};
  padding: 12px 8px 12px 8px;
  z-index: 2;
  border-radius: 0px 0px 8px 8px;
  background-color: ${theme.colors.primary[50]};
  shadow: ${({ showShadow }) => (showShadow ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  elevation: ${({ showShadow }) => (showShadow ? '1' : '0')};
`;

export const Overlay = styled.View`
  flex: 1;
`;
