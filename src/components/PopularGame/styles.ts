import { Image } from "@chakra-ui/image";
import styled from "styled-components";

export const GameTitle = styled.h3`
  font-size: var(--small-font-size);
  font-weight: 600;
  color: var(--color-black-2);
  margin-bottom: 2px;
`;

export const GameGenre = styled.span`
  font-size: var(--xsmall-font-size);
  color: var(--color-grey-7);
`;

export const GameRating = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: var(default--font-size);
  color: var(--color-black-2);
`;

export const StyledBox = styled.div`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    /* display: block; */
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(145,71,255,0.9), rgba(43,187,228,0.9));
  }

  &:hover &::after {
    display: block;
  }
`;