import React, { useEffect, useState } from "react";
import { setQuery } from "../network/apiClient";
import { fetchGamesData } from "../network/lib/games";
import { setWeekPeriodTimeString } from "../shared/utility";
import { Context } from "./interfaces";

export const IgdbContext = React.createContext<Context>({
  games: [],
  error: false,
  setGames: () => {}
});

export const IgdbContextProvider: React.FC = props => {
  const [fetchedGames, setFetchedGames] = useState<any[]>([]);
  const [isFetchingError, setIsFetchingError] = useState<boolean | string>(false);

  const weekTimePeriod: string = setWeekPeriodTimeString();
  const gamesAmountToFetch = 10;
  const filterData = `&dates=${weekTimePeriod}&ordering=-added&page_size=${gamesAmountToFetch}`;
  const query: string = setQuery(filterData);
  
  useEffect(() => {
    fetchGamesData('/games', query)
    .then(response => {
      const lastWeekPopularGames = response.results;
      const lastGame = lastWeekPopularGames.splice(-1, 1)
      const updatedGames = [...lastGame, ...lastWeekPopularGames];
      
      setFetchedGames(updatedGames);
    })
    
    .catch(error => {
      const errorMessage: string = error.response.data.error;
      
      setIsFetchingError(errorMessage);
    })
  }, []);
 
  const contextValue: Context = {
    games: fetchedGames, 
    error: isFetchingError,
    setGames: setFetchedGames
  };
  
  return <IgdbContext.Provider value={contextValue}>
          {props.children}
         </IgdbContext.Provider>;
}