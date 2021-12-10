import axios from "axios";
import { Box } from "@chakra-ui/layout";
import { Fragment, useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import { setQuery } from "../../network/apiClient";
import { fetchGameData } from "../../network/lib/games";
import { IgdbContext } from "../../store/IgdbContext";
import { Details, Hero } from "../";
import { Game } from "./interfaces";
import { Genres, ParentPlatforms, Series } from "../../shared/api.interfaces";

const renderComponents = (game: Game) => (
  <Box>
    <Hero 
      alt={game?.name as string}
      src={game?.screenshots[game.random_screenshot].image as string} 
      title={game?.name as string}
      release={game?.released as string}
      publisher={game?.publishers[0].name as string}
      publisherSlug={game?.publishers[0].slug as string}  />
    <Details 
      src={game?.background_image as string}
      nameSlug={game?.slug as string}
      genres={game?.genres as Genres[]}
      genreSlug={game?.genres[0].slug as string}
      platforms={game?.platforms as ParentPlatforms[]}
      description={game?.description_raw as string}
      versions={game?.series as Series[]}  
      website={game?.website as string}
      reddit={game?.reddit_url as string}
      metacritic={game?.metacritic}  />
  </Box>
);

const GamePage: React.FC = () => {
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
      setGame(gameData);
    }))
    .catch(error => {
      const errorMessage: string = error.responses.data.error;

      igdbContext.setError(errorMessage);
    })
  }, []);

  const components = game && renderComponents(game);

  return (
    <Fragment>
      {components}
    </Fragment>
  );
}

export default GamePage;