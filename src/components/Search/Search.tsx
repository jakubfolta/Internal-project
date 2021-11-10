import { InputGroup, InputRightAddon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { StyledInput } from './styles';

export const Search: React.FC = () => (
  <InputGroup maxW="28rem">
    <StyledInput bgColor="var(--color-grey)" />
    <InputRightAddon
      pointerEvents="none"
      p="1.5rem" 
      children={<SearchIcon boxSize="1.5rem"/>} />
  </InputGroup>
)