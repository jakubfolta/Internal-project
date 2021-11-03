import React, { Fragment } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { CloseIcon } from "@chakra-ui/icons";

interface Props {
  closeModalHandler?: any;
  fontSize?: string;
  color?: string;
}

const Heading = styled.h2`
  font-size: var(--big-font-size);
  font-weight: 500;
`;

const Description = styled.p`
  margin: 2.5rem 0;
  font-size: ${(props: Props) => props.fontSize || "var(--medium-font-size)"};
  font-weight: 300;
  color: ${(props: Props) => props.color || "var(--color-grey-2)"};
`;

export const PersonalizeModal = (props: Props) => (
  <Fragment>
    <Box
      position="absolute"
      top="0"
      left="0"
      height="100vh"
      width="100%"
      bg="var(--color-white)"
      
      onClick={props.closeModalHandler}>
    </Box>
    <Flex
      position="absolute"
      top="50vh"
      left="50vw"
      flexDirection="column"
      transform="translate(-50%, -50%)"
      width="55%">
      <Box>
        <Heading>Personalize</Heading>
        <CloseIcon 
          position="absolute"
          top="0"
          right="0"
          w="3.5rem"
          h="3.5rem"
          padding=".5rem"
          cursor="pointer"
          borderRadius="50%"             
          _hover={{bg: "var(--color-grey-3)"}}
          
          onClick={props.closeModalHandler} />
        <Description>Select what you want to see on your homepage</Description>
      </Box>
      <Box>
        <Description
        fontSize="var(--default-font-size)"
        color="var(color-grey-4)">Platforms you own:</Description>
      </Box>

    </Flex>


  </Fragment>
) 