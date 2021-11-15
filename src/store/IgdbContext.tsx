import React, { useEffect, useState } from "react";
import { setQuery } from "../network/apiClient";
import { fetchGamesData } from "../network/lib/games";
import { setWeekPeriodTimeString } from "../shared/utility";
import { Context } from "./interfaces";

export const IgdbContext = React.createContext<Context>({
  games: [],
  error: false
});

export const IgdbContextProvider: React.FC = props => {
  const [fetchedGames, setFetchedGames] = useState([]);
  const [isFetchingError, setIsFetchingError] = useState<boolean | string>(false);

  const weekTimePeriod: string = setWeekPeriodTimeString();
  // const filterData: string = `&dates=${weekTimePeriod}&ordering=-added`;
  const filterData: string = `&ordering=added`;
  console.log(filterData);
  const query: string = setQuery();

  useEffect(() => {
    fetchGamesData('/games', query)
      .then(response => {
        console.log(response);
        // setFetchedGames(response);
        })
      .catch(error => {
        const errorMessage: string = error.response.data.error;

        setIsFetchingError(errorMessage);
      })
  }, []);

  const contextValue: Context = {
    games: fetchedGames, 
    error: isFetchingError
  };
  
  return <IgdbContext.Provider value={contextValue}>
          {props.children}
         </IgdbContext.Provider>;
}