import styled from "styled-components";
import { StyledComponentsProps } from "./interfaces";

export const Heading = styled.h2`
  font-size: var(--big-font-size);
  font-weight: 500;
`;

export const Description = styled.p`
  margin: 2.5rem 0;
  font-size: ${(props: StyledComponentsProps) => props.fontSize || "var(--medium-font-size)"};
  font-weight: 300;
  color: ${(props: StyledComponentsProps) => props.color || "var(--color-grey-2)"};
`;