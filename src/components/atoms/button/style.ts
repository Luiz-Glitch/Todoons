import styled from 'styled-components/native';

export const ButtonStyle = styled.TouchableOpacity`
  height: 48px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const TextStyle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray[50]};
  font-weight: bold;
`;
