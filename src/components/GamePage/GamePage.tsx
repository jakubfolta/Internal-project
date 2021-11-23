import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import { setQuery } from "../../network/apiClient";
import { fetchGameData } from "../../network/lib/games";
import { IgdbContext } from "../../store/IgdbContext";
import { Game } from "./interfaces";
import { StyledHero } from "./styles";

export const GamePage: React.FC = () => {
  const [game, setGame] = useState<Game>();

  const igdbContext = useContext(IgdbContext);
  const search: {game: string} = useParams();
  const gameSlug = search.game;
  const query: string = setQuery();
  
  useEffect(() => {
    fetchGameData(gameSlug, query)
    .then(axios.spread((...responses) => {
      const randomScreenshot = Math.floor(Math.random() * responses[1].results.length);
      const gameData = {
        ...responses[0],
        random_screenshot: randomScreenshot,
        screenshots: responses[1].results,
        series: responses[2].results
      };
      
      console.log(gameData);
      console.log(randomScreenshot);

      setGame(gameData);
    }))
    .catch(error => {
      const errorMessage: string = error.responses.data.error;

      igdbContext.setError(errorMessage);
    })
  }, []);


  return (
    <Box>
      <StyledHero>
        <Image
          height="100%"
          width="100%"
          fit="cover"
          filter="blur(8px)"
          transform="scale(1.1)"
          src={game?.screenshots[game.random_screenshot].image}
          alt={game?.name} />
      </StyledHero>

    </Box>

  )
}