import React, { Component, Fragment } from 'react';
import GlobalStyle from './components/styles/global';
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from './containers/Layout/Layout';

export default class App extends Component {
  state = {

  }

  componentDidMount() {
    // fetch data from igdb api, save in state and pass state properties to Layout component........
  }
  
  render() {

    return (
      <Fragment>
        <ChakraProvider>
          <GlobalStyle />
          <Layout />
        </ChakraProvider>
      </Fragment>
    );
  }
}
