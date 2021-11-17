import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Props } from "./interfaces";
import { GameGenre, GameRating, GameTitle, StyledBox, StyledLink, StyledSpan } from "./styles";


export const PopularGame: React.FC<Props> = props => (
  <StyledLink to={props.link}>
    <StyledBox>
      <StyledSpan>Read<br/>More</StyledSpan>
      <Image
        fallbackSrc="https://via.placeholder.com/150"
        objectFit="cover"
        src={props.src}
        alt={props.alt} />
      <Box
        position="relative"
        width="var(--slide-width)"
        bg="var(--color-white)"
        p="1rem"
        border="1px solid var(--color-grey-3)"
        zIndex="10">
        <GameTitle>{props.title}</GameTitle>
        <GameGenre>{props.genre}</GameGenre>
        <GameRating>{props.rating}</GameRating>
      </Box>
    </StyledBox>
  </StyledLink>
)
