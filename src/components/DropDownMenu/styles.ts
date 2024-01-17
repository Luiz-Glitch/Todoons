import styled from 'styled-components/native';

import theme from '../../style/theme';

export const Container = styled.View`
  position: relative;
  width: 100%;
  height: 40px;
  align-self: center;
  justify-content: center;
  background-color: ${theme.colors.primary[50]};
  border-color: ${theme.colors.gray[100]};

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
  z-index: 2;
  background: ${theme.colors.primary[50]};
  border-radius: 0px 0px 8px 8px;
  border-top-width: 1px;
  border-color: ${theme.colors.gray[100]};
`;

export const Label = styled.Text<{ color?: string }>`
  ${theme.texts.bodyP3Bold}
  color: ${({ color }) => (color ? color : theme.colors.gray[700])};
`;

export const OptionText = styled.Text`
  ${theme.texts.bodyP4Regular}
  color: ${theme.colors.gray[700]};
`;

export const Overlay = styled.View`
  flex: 1;
`;
