import { IconOutline } from '@ant-design/icons-react-native';
import React from 'react';

import { SearchInput, Container, SearchButton } from "../searchbar/style";

interface SearchBarProps {
  placeholder: string;
}

export function SearchBar({placeholder}:SearchBarProps) {
  return (
    <Container>
      <SearchInput placeholder={placeholder}/>
      <SearchButton>
        <IconOutline name="search" size={24}/>
      </SearchButton>
    </Container>
  );
}
