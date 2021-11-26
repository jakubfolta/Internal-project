import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { BsTwitch } from "react-icons/bs";
import { StyledCloseButton, StyledTwitchBox, StyledTwitchButton } from "./styles";

export const TwitchModal: React.FC<{onCloseModal: React.MouseEventHandler}> = props => (
  // Will add React transition group to animate hiding modal as on igdb.com

  <StyledTwitchBox>
    <Flex justify="space-between" align="center">
      <span>Log in to IGDB.com</span>
      <StyledCloseButton onClick={props.onCloseModal}>
        <CloseIcon w="1rem" />
      </StyledCloseButton>
    </Flex>
    <StyledTwitchButton leftIcon={<BsTwitch />}>Login or Create a Twitch Account</StyledTwitchButton>
  </StyledTwitchBox>
) 