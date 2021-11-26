import { Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHero = styled(Box)`
  position: relative;
  width: 100vw;
  height: 47vh;
  overflow: hidden;
  background: linear-gradient(to bottom, var(--color-grey-3) 0%, var(--color-grey-3) 70%, var(--color-grey-5) 100%);
`;

export const StyledGameInfo = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: var(--default-width);
  margin-left: calc(var(--default-cover-image-width) + var(--cover-image-spacing));
  color: var(--color-background);
  font-weight: 600;
`; 

export const StyledHeading = styled.h2`
  display: flex;
  align-items: center;
  font-size: var(--game-heading-size);
  font-weight: bold;
  color: var(--color-white);
  `;

export const StyledEdit = styled.a`
  font-size: var(--xsmall-font-size);
  color: var(--color-edit);
  background-color: var(--color-edit-bg);
  margin-left: 2rem;
  padding: .3rem .5rem;
  border-radius: 2px;
  opacity: .5;

  &:hover { background-color: var(--color-grey-5); }
`;

export const StyledReleasedDate = styled.p`
  font-size: var(--big-font-size);
  opacity: .8;
`;

export const StyledPublisher = styled(Link)`
  display: inline-block;
  font-size: var(--medium-font-size);
  font-style: italic;
  margin: 2rem 0;
  line-height: 1;
  border-bottom: 1px solid transparent;
  opacity: .8;

  &:hover { border-color: var(--color-accent); }
`;