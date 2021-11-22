import React, { useEffect, useState } from "react";
import { setQuery } from "../network/apiClient";
import { fetchPopularGamesData } from "../network/lib/games";
import { setHalfYearPeriodTimeString } from "../shared/utility";
import { Context } from "./interfaces";

export const IgdbContext = React.createContext<Context>({
  games: [],
  error: false,
  setGames: () => {},
  setError: () => {}
});

export const IgdbContextProvider: React.FC = props => {
  const [fetchedGames, setFetchedGames] = useState<any[]>([]);
  const [isFetchingError, setIsFetchingError] = useState<boolean | string>(false);

  const halfYearTimePeriod: string = setHalfYearPeriodTimeString();
  const gamesAmountToFetch = 10;
  const filterData = `&dates=${halfYearTimePeriod}&page_size=${gamesAmountToFetch}`;
  const query: string = setQuery(filterData);
  
  useEffect(() => {
    fetchPopularGamesData(query)
    .then(response => {
      const lastSixMonthsPopularGames = response.results;
      const shuffledGames = lastSixMonthsPopularGames.sort((a: {}, b: {}) => .5 - Math.random());
      const lastGame = shuffledGames.splice(-1, 1);
      const updatedGames = [...lastGame, ...shuffledGames];

      // console.log(lastSixMonthsPopularGames);
      
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
    setGames: setFetchedGames,
    setError: setIsFetchingError
  };
  
  return <IgdbContext.Provider value={contextValue}>
          {props.children}
         </IgdbContext.Provider>;
}