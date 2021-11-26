import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import styled from "styled-components";

export const StyledTwitchBox = styled(Box)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 2.5rem);
  font-size: var(--default-font-size);
  font-weight: 700;
  width: 70vh;
  background-color: var(--color-background);
  border-radius: 6px;
  padding: .6rem;
  z-index: 20;

  &.appear { animation: slideDown .5s ease; }
  &.hide { animation: slideUp 1s ease; }
  
  @keyframes slideDown { 
    from { 
      opacity: 0;
      transform: translate(-50%, -20rem);
    } 
    
    to {
      opacity: 1;
      transform: translate(-50%, 2.5rem);
    } 
  }

  @keyframes slideUp { 
    from { 
      opacity: 1;
      transform: translate(-50%, 2.5rem);
    } 
    
    to {
      opacity: 0;
      transform: translate(-50%, -20rem);
    } 
  }
`;

export const StyledCloseButton = styled.button`
  padding: 1rem;
  line-height: 0;
  cursor: pointer;
  opacity: .5;
  transition: opacity .3s;
  backface-visibility: hidden;

  &:hover { opacity: 1; }
`;

export const StyledTwitchButton = styled(Button)`
  && {
    width: 100%; 
    background: var(--color-accent-2);
    font-size: var(--default-font-size);
    font-weight: 600;
  }
  
  margin: 1rem 0 1.5rem;
  padding: 2.7rem;
  width: 100%;
  color: var(--color-white);
  animation-fill-mode: forwards;

  &&:hover,
  &:hover svg { 
    color: var(--color-white-2);
    background-color: var(--color-accent-2);
  }
`;

