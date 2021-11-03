import React from "react";
import { Box, Checkbox } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import styled from "styled-components";

interface Props {
  label: string;
}

const Span = styled.span`
  font-size: var(--small-font-size);
  color: var(--color-black);
`;

export const DefaultCheckbox = (props: Props) => (
  <Box 
    flexBasis="50%"
    marginBottom="1rem">
    <Checkbox
      position="relative"
      spacing="2.3rem"
      size="lg"
      iconColor="yellow"
      _hover={{bg: "var(--color-black)"}}>
      <CheckIcon 
        position="absolute"
        top="0"
        left="0" />
      <Span>{props.label}</Span>
    </Checkbox>
  </Box>
)