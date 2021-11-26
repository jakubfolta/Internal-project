import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import styled from "styled-components";

export const StyledTwitchBox = styled(Box)`
  position: absolute;
  top: -20rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--default-font-size);
  font-weight: 700;
  width: 90vh;
  background-color: var(--color-background);
  border-radius: 6px;
  padding: .6rem;
  animation: slideDown .5s ease;
  animation-fill-mode: forwards;
  z-index: 20;
  
  @keyframes slideDown { from { top: -20rem } to { top: 2.5rem; } }
`;

export const StyledCloseButton = styled.button`
  padding: 1rem;
  line-height: 0;
  cursor: pointer;
  opacity: .5;
  transition: opacity .3s;

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
