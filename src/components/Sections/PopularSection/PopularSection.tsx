import { Box, HStack } from "@chakra-ui/layout";
import { useContext, useState } from "react";
import { IgdbContext } from "../../../store/IgdbContext";
import { PopularGame } from "../../";
import { ShiftData } from "./interfaces";
import { Heading, StyledBox, StyledIconLeft, StyledIconRight, StyledSpan } from "./styles";

export const PopularSection: React.FC = () => {
  const [shiftValue, setShiftValue] = useState(0);
  const [isSliderReady, setIsSliderReady] = useState(true);

  const igdbContext = useContext(IgdbContext);
  const fetchedGames = [...igdbContext.games];

  const shiftSlidesContainer = (shiftData: ShiftData) => shiftData.container.style.left=`${shiftData.translate * -1 - shiftData.slide}px`;

  const updateSlides = (direction: string) => {
    let updatedGames: {}[] = [];
    const copiedGame = direction === 'left'
      ? fetchedGames.splice(-1, 1)
      : fetchedGames.splice(0, 1);

    updatedGames = direction === 'left'
      ? [...copiedGame, ...fetchedGames]
      : [...fetchedGames, ...copiedGame];
      
      igdbContext.setGames(updatedGames);
    }
    
  const slideHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (!isSliderReady) return;
    setIsSliderReady(false);
    
    const slidesContainer = document.getElementById('slides_container')!;
    const slideWidth = slidesContainer?.offsetWidth / fetchedGames.length;
    const slideDirection= e.currentTarget.getAttribute('id')!;
    
    const translateValue = slideDirection === 'left'
    ? shiftValue + slideWidth
    : shiftValue - slideWidth;
    
    slidesContainer.style.transform=`translateX(${translateValue}px)`;
    setShiftValue(translateValue);
    
    setTimeout(() => {
      const ShiftData = {
        container: slidesContainer,
        translate: translateValue,
        slide: slideWidth
      }
      
      updateSlides(slideDirection);
      shiftSlidesContainer(ShiftData);
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
                link={`games/${game.slug}`}
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