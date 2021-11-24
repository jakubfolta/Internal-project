import React, { Fragment, Suspense } from 'react';
import GlobalStyle, { theme } from './styles/global';
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from './containers/Layout/Layout';
import { Redirect, Route, Switch } from 'react-router';
import { MainPage } from './components/MainPage/MainPage';

const GamePageComponent = React.lazy(() => import('./components/GamePage/GamePage') );
// const PublisherPageComponent = React.lazy(() => import('./components/PublisherPage/PublisherPage') );

export const App: React.FC = () => {
  const routes =
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/discovery" exact component={MainPage} />
        <Route path="/games/:game" exact component={GamePageComponent} />
        {/* <Route path="/companies/:publisher" exact component={PublisherPageComponent} /> */}
        <Redirect to="/discovery" />
      </Switch>;
    </Suspense>
  
  return (
    <Fragment>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          {routes}
        </Layout>
      </ChakraProvider>
    </Fragment>
  );
}
