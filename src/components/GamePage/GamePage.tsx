import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import { setQuery } from "../../network/apiClient";
import { fetchGameData } from "../../network/lib/games";
import { IgdbContext } from "../../store/IgdbContext";
import { Props } from "./interfaces";


export const GamePage: React.FC<Props> = () => {
  const [game, setGame] = useState({});

  const igdbContext = useContext(IgdbContext);
  const search: {game: string} = useParams();
  const gameSlug = search.game;
  const query: string = setQuery();
  
  useEffect(() => {
    fetchGameData(gameSlug, query)
    .then(axios.spread((...responses) => {
      const gameData = {...responses[0], screenshots: responses[1].results, series: responses[2].results};
      
      console.log(gameData);

      setGame(gameData);
    }))
    .catch(error => {
      const errorMessage: string = error.responses.data.error;

      igdbContext.setError(errorMessage);
    })
  }, [])
  return (
    <Box>
      <Box>
        <Image
        />
      </Box>

    </Box>

  )
}