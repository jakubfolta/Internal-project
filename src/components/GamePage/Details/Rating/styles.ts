import styled, { css } from "styled-components";

export const StyledCircleRating = styled.div<{metacritic: number}>`
  position: relative;
  width: var(--circle-rating-size);
  height: var(--circle-rating-size);
  background-color: var(--color-white);
  border-radius: 50%;
  z-index: 10;
  
  &::after {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "${props => props.metacritic}";
    width: 100%;
    height: 100%;
    font-size: var(--rating-size);
    border-radius: 50%;
  }
`;

const bar = css`
  position: absolute;
  top: calc(var(--progress-bar-width) / 2 * -1);
  left: calc(var(--progress-bar-width) / 2 * -1);
  width: calc(var(--circle-rating-size) + var(--progress-bar-width));
  height: calc(var(--circle-rating-size) + var(--progress-bar-width));
  border-radius: 50%;
  background-color: var(--color-grey-rating);
`;

export const StyledFirstHalfBar = styled.div`
  ${bar}
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
`
export const StyledSecondHalfBar = styled.div`
  ${bar}
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
`

const progress = css`
  width: 100%;
  height: 100%;
  background-color: var(--color-rating);
  border-radius: 50%;
`;

export const StyledFirstProgressBar = styled.div<{degrees: number, time: number}>`
  ${progress}
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  animation: rotateFirstHalf ${props => props.time}s var(--rating-animation-delay) linear;
  animation-fill-mode: forwards;
  
  @keyframes rotateFirstHalf {      
    100% { transform: rotate(${props => props.degrees}deg); }
  }
`;

export const StyledSecondProgressBar = styled.div<{degrees: number, time: number, elapsedTime: number}>`
  ${progress}
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  
  ${props => props.degrees && css`
    animation: rotateSecondHalf ${props.time}s linear;
    animation-fill-mode: forwards;
    animation-delay: calc(${props.elapsedTime}s + var(--rating-animation-delay));

    @keyframes rotateSecondHalf {
      100% { transform: rotate(${props.degrees}deg); }
    }
  `}
`;
