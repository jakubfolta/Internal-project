import { Fragment, useEffect } from 'react';
import GlobalStyle from './styles/global';
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from './containers/Layout/Layout';

export const App: React.FC = () => {
  useEffect(() => {
    // fetch data from igdb api, save in state and pass state properties to Layout component........
  }, []);
  
  return (
    <Fragment>
      <ChakraProvider>
        <GlobalStyle />
        <Layout />
      </ChakraProvider>
    </Fragment>
  );
}
