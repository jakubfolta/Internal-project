import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Props } from "./interfaces";
import { GameGenre, GameRating, GameTitle } from "./styles";


export const PopularGame: React.FC<Props> = props => (
  <Link
    to="/"
    // to={props.link}
    >
    <Box>
      <Image
        boxSize="20rem"
        objectFit="cover"
        // src={props.src}
        // alt={props.alt} 
        />
      <Box
        position="relative"
        bg="var(--color-white)"
        p="1rem"
        zIndex="-10">
        <GameTitle>Witcher</GameTitle>
        <GameGenre>RPG</GameGenre>
        <GameRating>100%</GameRating>
      </Box>
    </Box>
  </Link>

)
