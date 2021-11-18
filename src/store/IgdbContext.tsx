import React, { useEffect, useState } from "react";
import { setQuery } from "../network/apiClient";
import { fetchGamesData } from "../network/lib/games";
import { setWeekPeriodTimeString } from "../shared/utility";
import { Context } from "./interfaces";

export const IgdbContext = React.createContext<Context>({
  games: [],
  error: false,
  slide: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {}
});

export const IgdbContextProvider: React.FC = props => {
  const [fetchedGames, setFetchedGames] = useState([]);
  const [isFetchingError, setIsFetchingError] = useState<boolean | string>(false);
  const [shiftValue, setShiftValue] = useState(0);

  const weekTimePeriod: string = setWeekPeriodTimeString();
  const filterData = `&dates=${weekTimePeriod}&ordering=-added&page_size=10`;
  const query: string = setQuery(filterData);

  useEffect(() => {
    fetchGamesData('/games', query)
      .then(response => {
        const lastWeekPopularGames = response.results;
        console.log(lastWeekPopularGames);
        setFetchedGames(lastWeekPopularGames);
        })

      .catch(error => {
        const errorMessage: string = error.response.data.error;

        setIsFetchingError(errorMessage);
      })
  }, []);


  const slideHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const slideDirection: string = e.currentTarget.getAttribute('id')!
    const slidesContainer = document.getElementById('slides_container')!;
    const slideWidth: number = slidesContainer.offsetWidth / fetchedGames.length;

    const translateValue: number = slideDirection === 'left'
      ? shiftValue + slideWidth
      : shiftValue - slideWidth;
    
    slidesContainer.style.transform=`translateX(${translateValue}px)`;
    setShiftValue(translateValue)
    // console.log(translateValue, isNegativeNumber);
  }

  const contextValue: Context = {
    games: fetchedGames, 
    error: isFetchingError,
    slide: slideHandler
  };
  
  return <IgdbContext.Provider value={contextValue}>
          {props.children}
         </IgdbContext.Provider>;
}