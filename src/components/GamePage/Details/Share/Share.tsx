import { Box } from "@chakra-ui/layout";
import { HStack, InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
import { FaFacebook, FaGooglePlus, FaLink, FaTwitter } from "react-icons/fa";
import { DefaultButton } from "../../..";

export const Share: React.FC = props => (
  <Box>
    <HStack spacing="1rem">
      <DefaultButton
        alignSelf="center"
        m="2rem 0 2.2rem"
        p=".7rem 1.2rem"
        bg="var(--color-facebook)"
        borderRadius="4px"
        _hover={{color: "var(--color-white-2)"}}
        _active={{bg: "var(--color-facebook)"}}
        
        leftIcon={<FaFacebook 
                    style={{marginRight: ".7rem"}}
                    fontSize="1.7rem"  />}>Facebook</DefaultButton>
      <DefaultButton
        alignSelf="center"
        p=".7rem 1.2rem"
        bg="var(--color-twitter)"
        borderRadius="4px"
        _hover={{color: "var(--color-white-2)"}}
        _active={{bg: "var(--color-twitter)"}}
        
        leftIcon={<FaTwitter 
                    style={{marginRight: ".7rem"}}
                    fontSize="1.7rem"  />}>Tweet</DefaultButton>
      <DefaultButton
        alignSelf="center"
        p=".7rem 1.2rem"
        bg="var(--color-google)"
        borderRadius="4px"
        _hover={{color: "var(--color-white-2)"}}
        _active={{bg: "var(--color-google)"}}

        leftIcon={<FaGooglePlus 
                    style={{marginRight: ".7rem"}}
                    fontSize="1.7rem"  />}>Google</DefaultButton>
    </HStack>

    <InputGroup>
      <InputLeftAddon
        p="1.5rem 1.2rem" 
        color="var(--color-black-2)"
        bg="var(--color-grey-3)"
        children={<FaLink />} 
        fontSize="1.5rem"  />
      <Input 
        onClick={e => e.currentTarget.select()}
        type="text"
        value="https://www.igdb.com/g/2oku"
        p="1.4rem"
        fontSize="var(--small-font-size)"
        border="2px"
        borderLeft="none"
        _hover={{borderColor: "none"}}
        _focus={{borderColor: "var(--color-accent-2)"}}  />
    </InputGroup>
  </Box>
)