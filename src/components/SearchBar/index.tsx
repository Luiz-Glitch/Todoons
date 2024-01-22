import { IconOutline } from '@ant-design/icons-react-native';
import React from 'react';

import { SearchInput, Container } from './style';

interface SearchBarProps {
  value: string;
  placeholder: string;
}

export function SearchBar() {
  return (
    <Container>
      <SearchInput />
      <IconOutline name="search" />
    </Container>
  );
}
