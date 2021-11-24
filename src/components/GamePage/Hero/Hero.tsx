import { Image } from "@chakra-ui/image";
import { getElapsedDaysSincePastDate } from "../../../shared/utility";
import { Props } from "./interfaces";
import { StyledEdit, StyledGameInfo, StyledHeading, StyledHero, StyledPublisher, StyledReleasedDate } from "./styles";

export const Hero: React.FC<Props> = props => {
  const releaseDate = props.release;
  const day = new Date(releaseDate).getDate();
  const month = new Date(releaseDate).toLocaleString('default', { month: 'short' });
  const year = new Date(releaseDate).getFullYear(); 
  const transformedDate = `${day} ${month}, ${year} ()`;
  const elapsedDays = getElapsedDaysSincePastDate(releaseDate, true);
  

  // const elapsedDays = new Date(new Date().setDate(elapsedTime));

  // const currentDay = (new Date().getDate() - 59);
  // const elapsedDays = new Date(new Date().setDate(elapsedTime));

  console.log(releaseDate, transformedDate, elapsedDays);

  return (
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
          {props.title}
          <StyledEdit href="https://www.igdb.com/dialog/login">Edit</StyledEdit>
        </StyledHeading>
        <StyledReleasedDate>{props.release}</StyledReleasedDate>
        <StyledPublisher to={`/companies/${props.publisherSlug}`}>{props.publisher}</StyledPublisher>
      </StyledGameInfo>
        
    </StyledHero>
  );
}
