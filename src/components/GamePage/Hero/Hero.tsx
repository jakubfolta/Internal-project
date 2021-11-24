import React from "react";
import { Image } from "@chakra-ui/image";
import { getElapsedDaysSincePastDate } from "../../../shared/utility";
import { Props } from "./interfaces";
import { StyledEdit, StyledGameInfo, StyledHeading, StyledHero, StyledPublisher, StyledReleasedDate } from "./styles";

export const Hero: React.FC<Props> = React.memo(props => {
  const releaseDate = props.release;
  const day = new Date(releaseDate).getDate();
  const month = new Date(releaseDate).toLocaleString('default', { month: 'short' });
  const year = new Date(releaseDate).getFullYear(); 
  const elapsedDays = getElapsedDaysSincePastDate(releaseDate, true);
  
  const transformedDate = releaseDate && `${day} ${month}, ${year} (${elapsedDays})`;
  
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
          {releaseDate && <StyledEdit href="https://www.igdb.com/dialog/login">Edit</StyledEdit>}
        </StyledHeading>
        <StyledReleasedDate>{transformedDate}</StyledReleasedDate>
        <StyledPublisher to={`/companies/${props.publisherSlug}`}>{props.publisher}</StyledPublisher>
      </StyledGameInfo>
    </StyledHero>
  );
})
