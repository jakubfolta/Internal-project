import React from "react";
import styled from "styled-components";
import { Button } from "@chakra-ui/button";

interface Props {
  color?: string;
  kind?: any;
  leftIcon?: any;
  children?: string;
  link?: string;
}


// WORK IN PROGRESS

const StyledButton = styled(Button)`
  color: ${(props: Props) => props.color || "var(--color-white)"};
  align-self: stretch;
    margin-left: auto;
    /* height="auto"
    cursor="pointer"
    borderRadius="0"
    bg="var(--color-accent)"
    color="var(--color-white)"
    fontSize="var(--xsmall-font-size)"
    href={props.link}
    _focus={{boxShadow: "none"}}
    _active={{bg: "var(--color-accent-dark)"}}
    _hover={{bg: "var(--color-accent-dark)"}} */
`;

export const DefaultButton = (props: Props) => (
  <StyledButton
    color={props.color}
    /* alignSelf="stretch"
    marginLeft="auto"
    height="auto"
    cursor="pointer"
    borderRadius="0"
    bg="var(--color-accent)"
    color="var(--color-white)"
    fontSize="var(--xsmall-font-size)"
    href={props.link}
    _focus={{boxShadow: "none"}}
    _active={{bg: "var(--color-accent-dark)"}}
    _hover={{bg: "var(--color-accent-dark)"}} */

    as={props.kind}
    leftIcon={props.leftIcon}>
    {props.children}
  </StyledButton>
)