import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-black);
  font-size: var(--small-font-size);
  font-weight: 700;

  &:hover > span { background-color: var(--color-grey-5); }
`;

export const Input = styled.input.attrs({
  type: "checkbox"
})`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  &:checked + span {
    background-color: var(--color-accent-2);
    border-color: var(--color-accent-2);
  }
`;

export const Span = styled.span`
  position: relative;
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--color-grey-5);
  border-radius: 13%;
`;