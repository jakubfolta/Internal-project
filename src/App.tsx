import { Fragment, useEffect } from 'react';
import GlobalStyle from './styles/global';
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from './containers/Layout/Layout';
import { Redirect, Route, Switch } from 'react-router';
import { MainPage } from './components/MainPage/Mainpage';
import axios, { AxiosResponse } from 'axios';
import { clientId, clientSecret } from './network/apiClient';

export const App: React.FC = () => {
  useEffect(() => {
    
    const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`
    axios.post(url)
      .then((response: AxiosResponse) => {
        console.log(response)
      })
    // fetch data from igdb api, save in state and pass state properties to Layout component........
  }, []);

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
