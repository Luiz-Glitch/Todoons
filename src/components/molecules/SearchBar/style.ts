import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border-radius: 80px;
  padding: 4px 16px 4px 4px;
  margin: 0px 8px;
  background-color: ${({ theme }) => theme.colors.primary[100]};
`;
export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 4px 8px;
`;
