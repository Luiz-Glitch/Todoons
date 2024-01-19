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
  min-width: 260px;
  width: 80%;
  height: 100%;
  display: flex;
  align-self: center;
  position: absolute;
  margin: 12px 8px 12px 8px;
  z-index: 2;
  border-radius: 0px 0px 8px 8px;
  background-color: ${theme.colors.primary[500]};
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;
