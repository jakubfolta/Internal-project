import { Button } from "@chakra-ui/button";

interface Props {
  kind?: any,
  leftIcon?: any,
  children?: string,
  link?: string
}

export const DefaultButton = (props: Props) => (
  <Button 
    alignSelf="stretch"
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
    _hover={{bg: "var(--color-accent-dark)"}}

    as={props.kind}
    leftIcon={props.leftIcon}>
    {props.children}
  </Button>
)