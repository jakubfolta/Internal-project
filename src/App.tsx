import React, { Fragment, Suspense } from 'react';
import GlobalStyle, { theme } from './styles/global';
import { ChakraProvider } from "@chakra-ui/react";
import { Layout, MainPage } from './components';
import { Redirect, Route, Switch } from 'react-router';

const GamePageComponent = React.lazy(() => import('./components/GamePage/GamePage') );
// const PublisherPageComponent = React.lazy(() => import('./components/PublisherPage/PublisherPage') );
// const GenrePageComponent = React.lazy(() => import('./components/GenrePage/GenrePage') );
// const PlatformPageComponent = React.lazy(() => import('./components/PlatformPage/PlatformPage') );
// const SeriesPageComponent = React.lazy(() => import('./components/SeriesPage/SeriesPage') );

export const App: React.FC = () => {
  const routes =
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/discovery" exact component={MainPage} />
        <Route path="/games/:game" exact component={GamePageComponent} />
        {/* <Route path="/companies/:publisher" exact component={PublisherPageComponent} /> */}
        {/* <Route path="/genres/:genre" exact component={GenrePageComponent} /> */}
        {/* <Route path="/platforms/:platform" exact component={PlatformPageComponent} /> */}
        {/* <Route path="/games/:game/series" exact component={SeriesPageComponent} /> */}
        <Redirect to="/discovery" />
      </Switch>
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
