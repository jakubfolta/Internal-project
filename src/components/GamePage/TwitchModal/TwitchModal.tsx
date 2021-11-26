import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import { CloseIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { BsTwitch } from "react-icons/bs";
import { StyledCloseButton, StyledTwitchBox, StyledTwitchButton } from "./styles";

const animationTiming = {
  enter: 500,
  exit: 1000
};

export const TwitchModal: React.FC<{onCloseModal: React.MouseEventHandler, isVisible: boolean}> = props => (
  <CSSTransition
    mountOnEnter
    unmountOnExit
    in={props.isVisible}
    timeout={animationTiming}
    classNames={{
      enterActive: 'appear',
      exitActive: 'hide'}}>
    <StyledTwitchBox>
      <Flex 
        justify="space-between" 
        align="center">
        <span>Log in to IGDB.com</span>
        <StyledCloseButton onClick={props.onCloseModal}>
          <CloseIcon w="1rem" />
        </StyledCloseButton>
      </Flex>
      <a href="https://www.igdb.com/oauth/twitch">
        <StyledTwitchButton 
          leftIcon={<BsTwitch />}>
          Login or Create a Twitch Account      
        </StyledTwitchButton>
      </a>
    </StyledTwitchBox>
  </CSSTransition>
) 