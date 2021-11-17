import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styled, { css } from "styled-components";

export const Heading = styled.h2`
  position: relative;
  font-size: var(--default-font-size);
  font-weight: 700;
  letter-spacing: 1px;
  margin: 2rem 0;
  text-transform: uppercase;
  z-index: -10;

  :before {
    position: absolute;
    bottom: -1rem;
    left: 0;
    content: '';
    width: 5rem;
    height: 2px;
    background-color: var(--color-accent-3);
  }
`;

export const StyledBox = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const StyledSpan = styled.span<{left?: boolean, right?: boolean}>`
  position: absolute;
  top: 0;
  left: ${props => props.left && "var(--default-slides-spacing)"};
  right: ${props => props.right && "var(--default-slides-spacing)"};
  height: 100%;
  cursor: pointer;
  z-index: 11;

  &:hover svg {
    background-color: var(--color-white);
    color: var(--color-black);
  }
`;

const styledIcon = css`
  && { color: white; }
    
    position: relative;
    top: 20%;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 4rem;
`;

export const StyledIconLeft = styled(ChevronLeftIcon)`
  ${styledIcon}
`;

export const StyledIconRight = styled(ChevronRightIcon)`
  ${styledIcon}
`;