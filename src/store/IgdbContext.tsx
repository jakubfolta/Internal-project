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
  // const [shiftValue, setShiftValue] = useState(0);
  // const [isSliderReady, setIsSliderReady] = useState(true);

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
      console.log(lastWeekPopularGames);
      console.log(lastGame);
      console.log(updatedGames);
      
      setFetchedGames(updatedGames);
    })
    
    .catch(error => {
      const errorMessage: string = error.response.data.error;
      
      setIsFetchingError(errorMessage);
    })
  }, []);
  
  // const slideHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
  //   if (!isSliderReady) return;
  //   setIsSliderReady(false);
  //   const slideDirection: string = e.currentTarget.getAttribute('id')!
    
  //   const slidesContainer = document.getElementById('slides_container')!;
  //   const slideWidth: number = slidesContainer?.offsetWidth / fetchedGames.length;
    
  //   const translateValue: number = slideDirection === 'left'
  //   ? shiftValue + slideWidth
  //   : shiftValue - slideWidth;
    
  //   slidesContainer.style.transform=`translateX(${translateValue}px)`;
  //   setShiftValue(translateValue);
    
  //   setTimeout(() => {
  //     let games = fetchedGames;
  //     let lastGame: {}[], firstGame: {}[], updatedGames: {}[];

  //     if (slideDirection === 'left') {
  //       lastGame = games.splice(-1, 1);
  //       slidesContainer.style.left=`${translateValue * -1 - slideWidth}px`;
  //       updatedGames = [...lastGame, ...games];
  //       setFetchedGames(updatedGames);
  //     }
  //     if (slideDirection === 'right') {
  //       firstGame = games.splice(0, 1);
  //       slidesContainer.style.left=`${translateValue * -1 - slideWidth}px`;
  //       updatedGames = [...games, ...firstGame];
  //       setFetchedGames(updatedGames);
  //     }

      
  //     setIsSliderReady(true);
  //   }, 500)
  // }

  const contextValue: Context = {
    games: fetchedGames, 
    error: isFetchingError,
    setGames: setFetchedGames
  };
  
  return <IgdbContext.Provider value={contextValue}>
          {props.children}
         </IgdbContext.Provider>;
}