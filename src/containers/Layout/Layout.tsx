import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Box } from "@chakra-ui/react";
import { Header } from '../Header/Header';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';

const LayoutBox = styled(Box)`
  padding: 0 18rem;
`;
    
export const Layout = () => (
  <Fragment>
    <Header />
    <LayoutBox>
      <WelcomeSection />
      
    </LayoutBox>
  </Fragment>
)