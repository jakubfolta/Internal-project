import { Box } from "@chakra-ui/layout";
import styled, { css } from "styled-components";

export const StyledBackdrop = styled(Box)<{$iswhite: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.$isWhite ? "var(--color-white)}" : "var(--color-black)"};
  z-index: 20;

  ${props => !props.$isWhite && css`
    animation: appear .5s ease;
    opacity: 0;
    animation-fill-mode: forwards;
  `};

  &.hide { animation: hide .5s ease; }
`;