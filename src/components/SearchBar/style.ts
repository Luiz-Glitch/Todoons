import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchInput = styled.TextInput`
  padding: 4px 16px;
  border-radius: 80px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  margin: 0px 8px;
`;
