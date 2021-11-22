import { Box } from "@chakra-ui/layout";
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import { setQuery } from "../../network/apiClient";
import { fetchGamesData } from "../../network/lib/games";
import { IgdbContext } from "../../store/IgdbContext";
import { Props } from "./interfaces";


export const GamePage: React.FC<Props> = props => {
  const [game, setGame] = useState();


  const igdbContext = useContext(IgdbContext);
  const search: {game: string} = useParams();
  const gameSlug = search.game;
  const gameImages = igdbContext.games.filter(game => game.slug === gameSlug)[0].short_screenshots;

  console.log(gameImages);
  
  const query: string = setQuery();

  useEffect(() => {
    fetchGamesData(`/${gameSlug}${query}`)
    .then(response => {
      const gameWithScreenshots = {...response, screenshots: gameImages};
      console.log(gameWithScreenshots);
      // setGame()
    })
    .catch(error => {
      const errorMessage: string = error.response.data.error;

      igdbContext.setError(errorMessage);
    })
  }, [])
  return (
    <Box></Box>

  )
}