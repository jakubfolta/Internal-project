import { Fragment } from 'react';
import GlobalStyle from './styles/global';
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from './containers/Layout/Layout';
import { Redirect, Route, Switch } from 'react-router';
import { MainPage } from './components/MainPage/Mainpage';

export const App: React.FC = () => {
  const routes =
    <Switch>
      <Route path="/discovery" exact component={MainPage} />
      {/* <Route path=`/${gameTitle}` exact component={GamePage} /> */}
      <Redirect to="/discovery" />
    </Switch>;
  
  return (
    <Fragment>
      <ChakraProvider>
        <GlobalStyle />
        <Layout>
          {routes}
        </Layout>
      </ChakraProvider>
    </Fragment>
  );
}
