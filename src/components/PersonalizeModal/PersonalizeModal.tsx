import React, { Fragment, useState } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { CloseIcon } from "@chakra-ui/icons";
import { Backdrop } from "../Backdrop/Backdrop";
import { DefaultCheckbox } from "../UI/Checkbox/Checkbox";

interface PersonalizeModalProps {
  closeModalHandler: any;
}

interface StyledComponentsProps {
  fontSize?: string;
  color?: string;
}

const Heading = styled.h2`
  font-size: var(--big-font-size);
  font-weight: 500;
`;

const Description = styled.p`
  margin: 2.5rem 0;
  font-size: ${(props: StyledComponentsProps) => props.fontSize || "var(--medium-font-size)"};
  font-weight: 300;
  color: ${(props: StyledComponentsProps) => props.color || "var(--color-grey-2)"};
`;

export const PersonalizeModal = (props: PersonalizeModalProps) => {
  const [platforms] = useState([
    'PC (Microsoft Windows)',
    'Xbox One',
    'PlayStation 4',
    'Nintendo Switch',
    'Mac',
    'Linux',
    'iOS',
    'Android',
    'Nintendo 3DS',
    'Playstation Vita',
  ]);

  return (
    <Fragment>
      <Backdrop clickHandler={props.closeModalHandler} />
      <Flex
        position="absolute"
        top="50vh"
        left="50vw"
        flexDirection="column"
        transform="translate(-50%, -50%)"
        minWidth="90rem">
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
          <Flex
            flexWrap="wrap">
            
            {platforms.map(platform => (
              <DefaultCheckbox label={platform} />
            ))}
            

            {/* <Checkbox flexBasis="50%">Checkbox</Checkbox>
            <Checkbox flexBasis="50%">Checkbox</Checkbox>
            <Checkbox flexBasis="50%">Checkbox</Checkbox>
            <Checkbox flexBasis="50%">Checkbox</Checkbox>
            <Checkbox flexBasis="50%">Checkbox</Checkbox> */}
          
          </Flex>
        </Box>
      </Flex>
    </Fragment>
  );
}