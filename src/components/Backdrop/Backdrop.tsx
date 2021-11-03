import React from "react";
import { Box } from "@chakra-ui/layout";

interface Props {
  clickHandler: any;
}

export const Backdrop = (props: Props) => (
  <Box
    position="absolute"
    top="0"
    left="0"
    height="100vh"
    width="100%"
    bg="var(--color-white)"
    
    onClick={props.clickHandler}>
  </Box>
) 