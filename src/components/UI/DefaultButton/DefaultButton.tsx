import { Button } from "@chakra-ui/button";
import { Props } from "./interfaces";

const defaultFocusValue = {boxShadow: "none"};
const defaultActiveValue = {bg: "var(--color-accent-dark)"};
const defaultHoverValue = {bg: "var(--color-accent-dark)"};

export const DefaultButton: React.FC<Props> = props => (
  <Button
    alignSelf={props.alignSelf || "stretch"}
    p={props.p || "auto"}
    marginLeft={props.marginLeft || "auto"}
    m={props.m}
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
    onClick={props.onClickButton}>
    {props.children}
  </Button>
)