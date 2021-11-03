import React, { useState } from "react";
import { Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { IoMdOptions } from 'react-icons/io';
import { PersonalizeModal } from "../PersonalizeModal/PersonalizeModal";

const MainHeading = styled.h1`
  font-size: var(--big-font-size);
`;

const HeadingSpan = styled.span`
  font-style: italic;
`;

export const WelcomeSection = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalVisible = () => {
    setShowModal((currentState) => !currentState);
  }

    return(
      <Flex
        justifyContent="space-between"
        padding="2rem 1.8rem">
        <MainHeading>
          Welcome to the guiding star in <HeadingSpan>your </HeadingSpan>
          world of gaming
        </MainHeading>
        <Button
          rightIcon={<Icon as={IoMdOptions}
                          color="var(--color-accent-dark)" />}
          padding="3rem 0"
          marginTop="-1.3rem"
          fontSize="var(--medium-font-size-2)"
          fontWeight="300"
          bg="var(--color-white)"
          color="var(--color-grey-2)"
          cursor="pointer"
          _focus={{boxShadow: "none"}}
          _active={{bg: "transparent"}}
          _hover={{bg: "transparent"}}
          
          onClick={() => toggleModalVisible()}>
          Personalize
        </Button>
        {showModal && <PersonalizeModal 
                        closeModalHandler={toggleModalVisible} />}
      </Flex>
    );
  }
