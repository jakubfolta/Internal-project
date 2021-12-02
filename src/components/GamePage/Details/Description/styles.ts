import styled from "styled-components";

export const StyledMenuUnderline = styled.span<{position: () => number}>`
  position: absolute;
  bottom: 0;
  width: var(--menu-button-width);
  height: 2px;
  background: var(--color-accent-2);
  transform: translateX(calc(${props => props.position} * var(--menu-button-width)));
  transition: transform .3s;
`;

export const StyledMenuButton = styled.button<{active?: boolean}>`
  width: var(--menu-button-width);
  font-size: var(--small-font-size);
  font-weight: 700;
  color: ${props => props.active ? "var(--color-black)" : "var(--color-grey-2)"};
  padding: 1.7rem 0;
  white-space: nowrap;
  transition: color .3s;
`;