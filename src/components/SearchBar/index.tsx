import React from "react";
import { SearchInput, Container} from "./style";
import {SearchOutlined} from "@ant-design/icons";

interface SearchBarProps {
    value: string;
    placeholder: string;
}

export function SearchBar(){
    return (
        <Container>
            <SearchInput/>
            <SearchOutlined/>
        </Container>
    );
}