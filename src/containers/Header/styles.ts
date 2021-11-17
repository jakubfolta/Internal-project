import { Box } from '@chakra-ui/layout';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--color-primary);
`;

export const StyledBox = styled(Box)`
  width: var(--default-width);
  max-width: 100%;
  display: flex;
  align-items: center;
  margin: auto;
`;
