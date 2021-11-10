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