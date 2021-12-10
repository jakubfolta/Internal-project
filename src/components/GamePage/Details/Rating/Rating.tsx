import { Box } from "@chakra-ui/layout";
import { Props } from "./interfaces";
import { StyledCircleRating, StyledFirstHalfBar, StyledFirstProgressBar, StyledSecondHalfBar, StyledSecondProgressBar, } from "./styles";

export const Rating: React.FC<Props> = props => {
  const transformRatingToDegrees = (rating: number) => {
    const degrees = Math.floor(rating * 360 / 100);
    
    if (degrees < 181) return [degrees];
    const firstProgressBarDegrees = 180;
    const secondProgressBarDegrees = degrees - 180;

    return [degrees, firstProgressBarDegrees, secondProgressBarDegrees];
  }
  
  const adjustAnimationTiming = () => {
    if (!secondDegrees) return [time];
    
    const timingForFirstPart = Math.round(firstDegrees * time / fullDegrees * 100) / 100;
    const timingForRemainedPart = Math.round(secondDegrees * time / fullDegrees * 100) / 100;
    
    return [timingForFirstPart, timingForRemainedPart];    
    // console.log(timingForFirstPart, timingForRemainedPart);
  }

  const time = 2;
  const [fullDegrees, firstDegrees, secondDegrees]: number[] = transformRatingToDegrees(props.metacritic);
  const [firstPartTiming, secondPartTiming]: number[] = adjustAnimationTiming();

  console.log(firstPartTiming, secondPartTiming);

  console.log(firstDegrees, secondDegrees);

  return (
    <Box marginLeft="var(--cover-image-spacing)">

      <Box
        position="relative"
        top="calc((var(--circle-rating-size) ) / 2 * -1)">
        <StyledCircleRating metacritic={props.metacritic}  />
        <StyledFirstHalfBar>
          <StyledFirstProgressBar
            degrees={firstDegrees}
            time={firstPartTiming}  />  
        </StyledFirstHalfBar>
        
        <StyledSecondHalfBar>
          <StyledSecondProgressBar
            degrees={secondDegrees}
            time={secondPartTiming}
            elapsedTime={firstPartTiming}  />    
        </StyledSecondHalfBar>
      </Box>

      <Box
        h="10rem"
        borderBottom="1px solid var(--color-grey-3)">

      </Box>

    </Box>
  );
}