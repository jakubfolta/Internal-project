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
  font-size: var(--default-font-size);
  font-weight: 600;
  color: var(--color-black-2);
`;

export const StyledBox = styled.div`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(145,71,255,0.9), rgba(43,187,228,0.9));
  }
  
  &:hover::after,
  &:hover span { display: block; }
`;

export const StyledSpan = styled.span`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  color: var(--color-white);
  font-size: var(--xl-font-size);
  z-index: 1;
`;