import { Box, HStack } from "@chakra-ui/layout";
import { useContext, useState } from "react";
import { IgdbContext } from "../../../store/IgdbContext";
import { PopularGame } from "../../PopularGame/PopularGame";
import { Heading, StyledBox, StyledIconLeft, StyledIconRight, StyledSpan } from "./styles";

export const PopularSection: React.FC = () => {
  const [shiftValue, setShiftValue] = useState(0);
  const [isSliderReady, setIsSliderReady] = useState(true);

  const igdbContext = useContext(IgdbContext);
  const fetchedGames = igdbContext.games;
  const setFetchedGames = igdbContext.setGames

  const slideHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (!isSliderReady) return;
    setIsSliderReady(false);
    const slideDirection: string = e.currentTarget.getAttribute('id')!
    
    const slidesContainer = document.getElementById('slides_container')!;
    const slideWidth: number = slidesContainer?.offsetWidth / fetchedGames.length;
    
    const translateValue: number = slideDirection === 'left'
    ? shiftValue + slideWidth
    : shiftValue - slideWidth;
    
    slidesContainer.style.transform=`translateX(${translateValue}px)`;
    setShiftValue(translateValue);
    
    setTimeout(() => {
      let games = fetchedGames;
      let lastGame: {}[], firstGame: {}[], updatedGames: {}[];

      if (slideDirection === 'left') {
        lastGame = games.splice(-1, 1);
        slidesContainer.style.left=`${translateValue * -1 - slideWidth}px`;
        updatedGames = [...lastGame, ...games];
        setFetchedGames(updatedGames);
      }
      if (slideDirection === 'right') {
        firstGame = games.splice(0, 1);
        slidesContainer.style.left=`${translateValue * -1 - slideWidth}px`;
        updatedGames = [...games, ...firstGame];
        setFetchedGames(updatedGames);
      }

      
      setIsSliderReady(true);
    }, 500)
  }
  

  return (
    <Box>
      <Heading>Popular games right now</Heading>
      <StyledBox>
        
        <StyledSpan id="left" onClick={(e) => slideHandler(e)}>
          <StyledIconLeft />
        </StyledSpan>
        <StyledSpan id="right" onClick={(e) => slideHandler(e)}>
          <StyledIconRight />
        </StyledSpan>
        <HStack
            left="calc(var(--slide-width) * -1 - var(--default-slides-spacing) * 2)"
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