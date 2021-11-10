import { Box } from "@chakra-ui/layout";
import React from "react";

export const Backdrop: React.FC<{onClickBackdrop: React.MouseEventHandler}> = props => (
  <Box
    position="absolute"
    top="0"
    left="0"
    height="100vh"
    width="100%"
    bg="var(--color-white)"
    
    onClick={props.onClickBackdrop}>
  </Box>
) 