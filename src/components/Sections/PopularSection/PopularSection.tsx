import { Box, HStack } from "@chakra-ui/layout";
import { useContext } from "react";
import { IgdbContext } from "../../../store/IgdbContext";
import { PopularGame } from "../../PopularGame/PopularGame";
import { Heading, StyledIconLeft, StyledIconRight, StyledSpan } from "./styles";

export const PopularSection: React.FC = () => {
  const igdbContext = useContext(IgdbContext);

  return (
    <Box>
      <Heading>Popular games right now</Heading>
      <HStack
        position="relative"
        direction="row"
        overflow="hidden"
        spacing="var(--default-slides-spacing)">
        <StyledSpan left>
          <StyledIconLeft />
        </StyledSpan>
        <StyledSpan right>
          <StyledIconRight />
        </StyledSpan>

          {igdbContext.games.map(game => (
            <PopularGame
              key={game.id}
              link={`games/${game.name}`}
              src={game.background_image}
              alt={game.name}
              title={game.name}
              genre={game.genres[0].name}
              rating={game.metacritic ? `${game.metacritic}%` : ''} />
          ))}
      </HStack>
    </Box>
  );
}