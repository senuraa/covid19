import React from 'react';
import styled from 'styled-components';
import ICSearch from './icons-icon_search.png';

const InputContainer = styled.div`
    width: 15%;
    height: 2rem;
    padding: 1rem;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 0.2rem 0.5rem 0.2rem 1.5rem;
    
    border: none;

    &::placeholder {
        color: #aaacae;
    }

    &:focus {
        outline: none;
    }
    background: url('${ICSearch}') no-repeat left;
`;

const SearchBox = () => {
    return (
        <InputContainer>
            <Input placeholder="Find..." />
        </InputContainer>
    );
};

export default SearchBox;
