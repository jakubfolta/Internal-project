import React from "react";
import { Button } from "@chakra-ui/button";
import { CSSObject } from "@chakra-ui/styled-system";

interface Props {
  color?: string;
  p?: string;
  marginLeft?: string;
  bg?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  _focus?: CSSObject;
  _active?: CSSObject;
  _hover?: CSSObject;
  kind?: any;
  leftIcon?: any;
  children?: string;
  link?: string;
  clickHandler?: React.MouseEventHandler;
}

const defaultFocusValue = {boxShadow: "none"};
const defaultActiveValue = {bg: "var(--color-accent-dark)"};
const defaultHoverValue = {bg: "var(--color-accent-dark)"};

export const DefaultButton = (props: Props) => (
  <Button
    alignSelf="stretch"
    p={props.p || "auto"}
    marginLeft={props.marginLeft || "auto"}
    height="auto"
    cursor="pointer"
    borderRadius={props.borderRadius || "0"}
    bg={props.bg || "var(--color-accent)"}
    border={props.border || "none"}
    color={props.color || "var(--color-white)"}
    fontSize={props.fontSize || "var(--xsmall-font-size)"}
    href={props.link}
    _focus={props._focus || defaultFocusValue}
    _active={props._active || defaultActiveValue}
    _hover={props._hover || defaultHoverValue}

    as={props.kind}
    leftIcon={props.leftIcon}
    onClick={props.clickHandler}>
    {props.children}
  </Button>
)