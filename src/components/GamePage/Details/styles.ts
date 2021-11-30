import styled from "styled-components"

export const StyledFollowButton = styled.button`
  width: 100%;
  margin-top: 2rem;
  padding: .7rem 0;
  font-size: var(--small-font-size);
  font-weight: 600;
  color: var(--color-white);
  background: var(--color-accent-2);
  border: 1px solid var(--color-accent-2);
  border-radius: 4px;
  
  &:hover {
    background: var(--color-accent-dark-2);
    border-color: var(--color-accent-dark-2);
  }

  &:active {
    background: var(--color-accent-dark-3);
    border-color: var(--color-accent-dark-3);
  }
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

export const StyledMenuUnderline = styled.span<{position: () => number}>`
  position: absolute;
  bottom: 0;
  width: var(--menu-button-width);
  height: 2px;
  background: var(--color-accent-2);
  transform: translateX(calc(${props => props.position} * var(--menu-button-width)));
  transition: transform .3s;
`;