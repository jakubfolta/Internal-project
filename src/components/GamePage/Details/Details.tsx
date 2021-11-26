import { ButtonGroup } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box } from "@chakra-ui/layout"
import React, { useState } from "react"
import { Menu, Props } from "./interfaces"
import { StyledFollowButton, StyledMenuButton, StyledMenuUnderline } from "./styles"

export const Details: React.FC<Props> = props => {
  const [menu, setMenu] = useState<Menu[]>([
    {
      name: "About",
      status: true,
      id: "about"
    },
    {
      name: "Add To",
      status: false,
      id: "add"
    },
    {
      name: "Share",
      status: false,
      id: "share"
    }
  ]);
  
  const onSwitchActiveButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.getAttribute('id')!;
    const menuCopy = [...menu];
    
    for (const item of menuCopy) {
      item.status = false;
      if (item.id === id) item.status = true;
    }
    
    setMenu(menuCopy);
  };
  
  const getActiveButtonPosition = () => {
    let position = 0;
    
    for (const button of menu) {
      if (button.status) break;
      position += 1;  
    }
    
    return position;
  };
  
  const buttons = menu.map(button => (
    <StyledMenuButton
      key={button.id}
      active={button.status}
      id={button.id}
      onClick={e => onSwitchActiveButtonHandler(e)}>{button.name}</StyledMenuButton>
  ))

  return (
    <Box
      position="relative"
      display="flex"
      w="var(--default-width)"
      m="auto">
      <Box
        position="relative"
        top="-25rem"
        w="var(--default-cover-image-width)"
        marginRight="var(--cover-image-spacing)">
        <Image
          w="100%"
          h="35rem"
          fit="cover"
          src={props.src} />
        <StyledFollowButton>Follow</StyledFollowButton>
      </Box>
      
      <Box flex="1">
        <Box bg="var(--color-white)">
          <ButtonGroup
            position="relative"
            spacing="0px"
            variant="ghost">
            {buttons}
            <StyledMenuUnderline position={getActiveButtonPosition} />
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
}