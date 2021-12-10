import styled from "styled-components";

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