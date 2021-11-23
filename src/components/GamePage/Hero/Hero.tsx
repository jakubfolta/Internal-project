import { Image } from "@chakra-ui/image";
import { Props } from "./interfaces";
import { StyledEdit, StyledGameInfo, StyledHeading, StyledHero, StyledPublisher, StyledReleasedDate } from "./styles";

export const Hero: React.FC<Props> = props => (
  <StyledHero>
    <Image
      height="100%"
      width="100%"
      fit="cover"
      filter="blur(8px)"
      transform="scale(1.1)"
      src={props.src}
      alt={props.alt} />
    <StyledGameInfo>
      <StyledHeading>
        <StyledEdit>Edit</StyledEdit>
        {props.title}
      </StyledHeading>
      <StyledReleasedDate>{props.release}</StyledReleasedDate>
      <StyledPublisher>{props.publisher}</StyledPublisher>

    </StyledGameInfo>
    
  </StyledHero>
)
