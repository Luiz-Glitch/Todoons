import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
export const ContainerGeral = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 45px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding: 8px;
`;
export const Titulo = styled.Text`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: 500;
  font-size: 16px;
`;

export const AddTag = styled.TouchableOpacity``;
