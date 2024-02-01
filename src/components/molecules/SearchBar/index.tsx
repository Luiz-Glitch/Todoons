import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { SearchInput, Container } from './style';

interface SearchBarProps {
  placeholder: string;
}

export function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <Container>
      <SearchInput placeholder={placeholder} />
      <TouchableOpacity>
        <AntDesign name="search1" size={24} color="gray" />
      </TouchableOpacity>
    </Container>
  );
}
