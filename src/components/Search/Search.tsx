import React from 'react';
import { InputGroup, InputRightAddon, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  && {
    font-size: var(--medium-font-size);
    padding: 1.5rem;
  
    &:focus {
      border-color: transparent;
      box-shadow: none;
      background-color: var(--color-white);
    }
  }
`;

export const Search = () => (
  <InputGroup>
    <StyledInput 
      type="text"
      placeholder="Search"
      bgColor="var(--color-grey)"
      
       />
    <InputRightAddon
      pointerEvents="none"
      children={<SearchIcon boxSize="1.5rem"/>}
      p="1.5rem" />
  
  </InputGroup>
  )