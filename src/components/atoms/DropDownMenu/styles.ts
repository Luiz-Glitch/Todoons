import styled from 'styled-components/native';

import theme from '../../../style/theme';

export const Container = styled.View<{ showShadow: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: ${theme.colors.primary[50]};
  box-shadow: ${({ showShadow }) => (showShadow ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  elevation: ${({ showShadow }) => (showShadow ? '1' : '0')};
  border-radius: 8px 8px 0px 0px;

  z-index: 1;
`;

export const DropdownContentContainer = styled.View<{
  relativeHeight: number;
  relativeWidth: number;
  width: number;
}>`
  display: flex;
  width: ${({ width }) => `${width}px`};
  position: absolute;
  top: ${({ relativeHeight }) => `${relativeHeight}px`};
  left: ${({ relativeWidth }) => `${relativeWidth}px`};
  padding: 12px 8px 12px 8px;
  background-color: ${theme.colors.primary[50]};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  elevation: 1;
  z-index: 2;
`;

export const Label = styled.Text<{ color?: string }>`
  ${theme.texts.bodyP3Bold}
  color: ${({ color }) => (color ? color : theme.colors.gray[900])};
`;

export const Placeholder = styled.Text`
  ${theme.texts.bodyP3Regular}
  color: ${theme.colors.gray[400]};
`;

export const OptionText = styled.Text`
  ${theme.texts.bodyP4Regular}
  color: ${theme.colors.gray[700]};
`;

export const Overlay = styled.View`
  flex: 1;
`;
