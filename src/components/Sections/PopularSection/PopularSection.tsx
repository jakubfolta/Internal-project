import { Box, HStack } from "@chakra-ui/layout";
import { useContext, useEffect } from "react";
import { IgdbContext } from "../../../store/IgdbContext";
import { PopularGame } from "../../PopularGame/PopularGame";
import { Heading } from "./styles";

export const PopularSection: React.FC = () => {

  const igdbContext = useContext(IgdbContext);
  useEffect(() => {
    if (igdbContext.token) {
      console.log(igdbContext.token);

    }
    
  }, [igdbContext])

  return (
    <Box>
      <Heading>Popular games right now</Heading>
      <HStack 
        direction="row"
        spacing="1rem">
          <PopularGame           // map through array of fetched data to create items
          // alt={game.link}
          // link={game.link} 
          />

      </HStack>
    </Box>

  );
}