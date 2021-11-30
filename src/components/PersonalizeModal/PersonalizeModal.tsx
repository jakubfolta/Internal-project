import { Fragment, useState } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { CloseIcon } from "@chakra-ui/icons";
import { Backdrop, Checkbox, DefaultButton } from "../";
import { Description, Heading } from "./styles";

export const PersonalizeModal: React.FC<{onCloseModal: () => void, isVisible: boolean}> = props => {
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
    'Playstation Vita'
  ]);

  return (
    <Fragment>
      <Backdrop 
        isVisible={props.isVisible}
        iswhite
        onClickBackdrop={props.onCloseModal} />
      <Flex
        position="absolute"
        top="50vh"
        left="50vw"
        flexDirection="column"
        transform="translate(-50%, -50%)"
        minWidth="90rem"
        zIndex="20">
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
            
            onClick={props.onCloseModal} />
          <Description>Select what you want to see on your homepage</Description>
        </Box>
        <Box>
          <Description
            fontSize="var(--default-font-size)"
            color="var(color-grey-4)">Platforms you own:</Description>
          <Flex
            flexWrap="wrap">
            {platforms.map(platform => (
              <Checkbox key={platform} label={platform} />
            ))}            
          </Flex>
          <Flex marginTop="1rem">
          <DefaultButton
              p="1.3rem 4rem"
              fontSize="var(--default-font-size)"
              color="var(--color-grey-2)"
              bg="var(--color-white)"
              border="2px solid var(--color-accent-2)"
              borderRadius="3px"
              _focus={{bg: "var(--color-grey-6)"}}
              _active={{bg: "var(--color-grey-6)"}}
              _hover={{bg: "var(--color-grey-6)"}}
              onClickButton={props.onCloseModal}>
              Cancel
            </DefaultButton>
            <DefaultButton
              p="1.3rem 4rem"
              marginLeft=".5rem"
              fontSize="var(--default-font-size)"
              color="var(--color-white)"
              bg="var(--color-accent-2)"
              border="2px solid var(--color-accent-2)"
              borderRadius="3px"
              _focus={{bg: "var(--color-accent-dark)"}}
              _active={{bg: "var(--color-accent-dark)"}}
              _hover={{bg: "var(--color-accent-dark)",
                       borderColor: "var(--color-accent-dark)"}}
              onClickButton={props.onCloseModal}>
              Save
            </DefaultButton>
          </Flex>
        </Box>
      </Flex>
    </Fragment>
  );
}