import { Box, HStack } from "@chakra-ui/layout";
import { useContext } from "react";
import { IgdbContext } from "../../../store/IgdbContext";
import { PopularGame } from "../../PopularGame/PopularGame";
import { Heading, StyledBox, StyledIconLeft, StyledIconRight, StyledSpan } from "./styles";

export const PopularSection: React.FC = () => {
  const igdbContext = useContext(IgdbContext);

  return (
    <Box>
      <Heading>Popular games right now</Heading>
      <StyledBox>
        
        <StyledSpan id="left" onClick={(e) => igdbContext.slide(e)}>
          <StyledIconLeft />
        </StyledSpan>
        <StyledSpan id="right" onClick={(e) => igdbContext.slide(e)}>
          <StyledIconRight />
        </StyledSpan>

        <HStack
          id="slides_container"
          position="relative"
          transition="transform .5s ease"
          direction="row"
          spacing="0">
          {igdbContext.games.map(game => (
            <PopularGame
              key={game.id}
              link={`games/${game.name}`}
              src={game.background_image}
              alt={game.name}
              title={game.name}
              genre={game.genres[0].name}
              rating={game.metacritic} />
          ))}
        </HStack>
      </StyledBox>
    </Box>
  );
}