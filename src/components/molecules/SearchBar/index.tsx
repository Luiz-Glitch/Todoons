import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, TextInputProps } from 'react-native';

import { SearchInput, Container } from './style';

export function SearchBar({ ...props }: TextInputProps) {
  return (
    <Container>
      <SearchInput {...props} />
      <TouchableOpacity>
        <AntDesign name="search1" size={24} color="gray" />
      </TouchableOpacity>
    </Container>
  );
}
