import { Input } from '@chakra-ui/input';
import styled from 'styled-components';

export const StyledInput = styled(Input).attrs({
  type: "text",
  placeholder: "Search"
})`
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