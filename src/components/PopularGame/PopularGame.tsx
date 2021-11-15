import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { Props } from "./interfaces";
import { GameGenre, GameRating, GameTitle, StyledBox, StyledSpan } from "./styles";


export const PopularGame: React.FC<Props> = props => (
  <Link to={props.link}>
    <StyledBox>
      <StyledSpan>Read<br/>More</StyledSpan>
      <Image
        boxSize="30rem"
        objectFit="cover"
        src={props.src}
        alt={props.alt} 
        />
      <Box
        position="relative"
        bg="var(--color-white)"
        p="1rem"
        zIndex="1">
        <GameTitle>{props.title}</GameTitle>
        <GameGenre>{props.genre}</GameGenre>
        <GameRating>{props.rating}</GameRating>
      </Box>
    </StyledBox>
  </Link>
)
