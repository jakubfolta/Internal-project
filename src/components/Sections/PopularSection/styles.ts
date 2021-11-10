import styled from "styled-components";

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