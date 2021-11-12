import React, { useEffect, useState } from "react";
import { clientId, clientSecret } from "../network/apiClient";
import { auth } from "../network/lib/auth";
import { fetchGamesData } from "../network/lib/games";
import { Context } from "./interfaces";

export const IgdbContext = React.createContext<Context>({
  token: null,
  games: [],
  error: false
});

export const IgdbContextProvider: React.FC = props => {
  const [fetchedToken, setFetchedToken] = useState<string | null>(null);
  const [fetchedGames, setFetchedGames] = useState([]);
  const [isFetchingError, setIsFetchingError] = useState(false);

  useEffect(() => {
    const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
    
    auth(url)
      .then(response => {
        const token = response.access_token;
        const headers = {
          'Accept': 'application.json',
          'Content-Type': 'application.json',
          'Client-ID': clientId,
          'Authorization': `Bearer ${token}`
        }
        console.log(headers);
        setFetchedToken(token);

        fetchGamesData('/games', null, {headers: headers})
          .then(response => {
            console.log(response);
            })
          .catch(error => {
            console.log(error);
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const contextValue: Context = {
    token: fetchedToken,
    games: fetchedGames, 
    error: isFetchingError
  };
  
  return <IgdbContext.Provider value={contextValue}>
          {props.children}
         </IgdbContext.Provider>
}