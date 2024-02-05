import styled from 'styled-components/native';

import theme from '../../style/theme';

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.texts.bodyP3Regular.fontSize}px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const DateButton = styled.TouchableOpacity<{
  isCreateTask: boolean;
}>`
  width: 100%;
  background-color: ${({ isCreateTask, theme }) =>
    isCreateTask ? theme.colors.primary[50] : 'transparent'};
  color: ${({ isCreateTask, theme }) => (isCreateTask ? theme.colors.gray[900] : '#000')};
  border-radius: 8px;
  padding: 8px;
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
