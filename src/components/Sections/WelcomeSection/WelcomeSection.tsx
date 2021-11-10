import { useState } from "react";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { IoMdOptions } from 'react-icons/io';
import { PersonalizeModal } from "../../PersonalizeModal/PersonalizeModal";
import { HeadingSpan, MainHeading } from "./styles";

export const WelcomeSection: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModalHandler = () => setIsModalVisible((currentState) => !currentState);

  return (
    <Flex
      justifyContent="space-between"
      padding="2rem 0">
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
        
        onClick={toggleModalHandler}>
        Personalize
      </Button>
      {isModalVisible && <PersonalizeModal 
                      onCloseModal={toggleModalHandler} />}
    </Flex>
  );
}
