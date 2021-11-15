import { Box, HStack } from "@chakra-ui/layout";
import { useContext } from "react";
import { IgdbContext } from "../../../store/IgdbContext";
import { PopularGame } from "../../PopularGame/PopularGame";
import { Heading } from "./styles";

export const PopularSection: React.FC = () => {
  const igdbContext = useContext(IgdbContext);

  return (
    <Box>
      <Heading>Popular games right now</Heading>
      <HStack 
      
        direction="row"
        
        spacing="1rem">
          {igdbContext.games.map(game => (
            <PopularGame
              key={game.id}
              link={`games/${game.name}`}
              src={game.background_image}
              alt={game.name}
              title={game.name}
              genre={game.genres[0].name}
              rating={`${game.metacritic}%`} />
          ))}
      </HStack>
    </Box>
  );
}