import { Fragment } from 'react';
import GlobalStyle, { theme } from './styles/global';
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from './containers/Layout/Layout';
import { Redirect, Route, Switch } from 'react-router';
import { MainPage } from './components/MainPage/Mainpage';
import { GamePage } from './components/GamePage/GamePage';

export const App: React.FC = () => {
  const routes =
    <Switch>
      <Route path="/discovery" exact component={MainPage} />
      <Route path="/games/:game" exact component={GamePage} />
      <Redirect to="/discovery" />
    </Switch>;
  
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
