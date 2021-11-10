import { CSSObject } from "@chakra-ui/styled-system";

export interface Props {
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
  onClickButton?: React.MouseEventHandler;
}