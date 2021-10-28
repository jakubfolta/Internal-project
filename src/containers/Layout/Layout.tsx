import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Box } from "@chakra-ui/react";
import { Header } from '../Header/Header';

const LayoutBox = styled(Box)`
  padding: 0 20rem;
`;
    
export const Layout = () => (
  <Fragment>
    <Header />
    <LayoutBox>
      
    </LayoutBox>
  </Fragment>
)