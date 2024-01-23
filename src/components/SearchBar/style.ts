import styled from 'styled-components/native';

export const Container = styled.View`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;  
`;
export const SearchInput=styled.TextInput`
  margin: 0px 8px;
  width: 80%; 
  height: 40px; 
  background-color:${({ theme }) => theme.colors.gray[100]}; 
  border-radius: 80px; 
  padding: 8px; 
  font-size: 16px; 
`;

export const SearchButton=styled.View`
  background-color: ${({theme})=>theme.colors.gray[200]};
  border-radius: 80px; 
  padding: 6px; 
`;

