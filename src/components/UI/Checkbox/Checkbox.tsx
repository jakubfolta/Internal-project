import React from "react";
import { Box, Checkbox } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import styled from "styled-components";

interface Props {
  label: string;
}

const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-black);
  font-size: var(--small-font-size);
  font-weight: 700;

  &:hover > span { background-color: var(--color-grey-5); }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  &:checked + span {
    background-color: var(--color-accent-2);
    border-color: var(--color-accent-2);
  }
`;

const Span = styled.span`
  position: relative;
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--color-grey-5);
  border-radius: 13%;


`;

export const DefaultCheckbox = (props: Props) => (
  <Box
    position="relative"
    flexBasis="50%"
    marginBottom="1rem">

    <Label>
      <Input type="checkbox" />
      <Span>
        <CheckIcon 
          position="absolute"  
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)" 
          width="1.7rem"
          height="1.7rem"
          color="var(--color-white)" />
      </Span>
      {props.label}
      </Label>
  </Box>
)