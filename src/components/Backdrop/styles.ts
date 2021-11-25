import { Box } from "@chakra-ui/layout";
import styled from "styled-components";

export const StyledBackdrop = styled(Box)<{isWhite: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.isWhite ? "var(--color-white)}" : "var(--color-black)"};
  opacity: ${props => !props.isWhite && 0};
  animation: ${props => !props.isWhite && "appear .5s ease"};
  animation-fill-mode: forwards;
  z-index: 20;
`;