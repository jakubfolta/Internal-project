import { Box } from "@chakra-ui/layout";
import styled from "styled-components";

export const StyledBackdrop = styled(Box)<{iswhite: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.iswhite ? "var(--color-white)}" : "var(--color-black)"};
  opacity: ${props => !props.iswhite && 0};
  animation: ${props => !props.iswhite && "appear .5s ease"};
  animation-fill-mode: forwards;
  z-index: 20;

  &.hide { animation: hide .5s ease; }
`;