import { IconOutline } from '@ant-design/icons-react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SearchInput, Container} from "../searchbar/style";

interface SearchBarProps {
  placeholder: string;
}

export function SearchBar({placeholder}:SearchBarProps) {
  return (
    <Container>
      <SearchInput placeholder={placeholder}/>
      <TouchableOpacity>
        <IconOutline name="search" size={24}/>
      </TouchableOpacity>
    </Container>
  );
}