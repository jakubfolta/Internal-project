import { Flex } from "@chakra-ui/layout";
import React from "react";

interface Props {
  closeModalHandler: any;
}

export const PersonalizeModal = (props: Props) => (
  <Flex
    bg="yellow"
    
    onClick={props.closeModalHandler}>

  </Flex>
) 