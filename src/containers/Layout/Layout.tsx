import { Fragment } from 'react';
import { Box } from "@chakra-ui/react";
import { Header } from '../Header/Header';
import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
    
export const Layout: React.FC = () => (
  <Fragment>
    <Header />
    <Box p="0 18rem">
      <WelcomeSection />

    </Box>
  </Fragment>
)