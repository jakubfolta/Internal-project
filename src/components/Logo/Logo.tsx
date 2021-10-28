import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  color: var(--color-white);
  font-size: 2rem;
`;

export const Logo = () => (
    <Box >
      <StyledLink to="/">Logo</StyledLink>
    </Box>
)
