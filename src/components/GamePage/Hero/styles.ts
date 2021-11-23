import { Box } from "@chakra-ui/layout";
import styled from "styled-components";

export const StyledHero = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 47vh;
  overflow: hidden;
  background: linear-gradient(to bottom, var(--color-grey-3) 0%, var(--color-grey-3) 70%, var(--color-grey-5) 100%);
`;

export const StyledGameInfo = styled(Box)`
  position: absolute;

`; 

export const StyledHeading = styled.h2`
  /* position: relative; */
  font-size: var(--game-heading-size);
  font-weight: bold;
`;

export const StyledEdit = styled.span`
  position: absolute;
  right: 0;
`;

export const StyledReleasedDate = styled.p`

`;

export const StyledPublisher = styled.a`

`;