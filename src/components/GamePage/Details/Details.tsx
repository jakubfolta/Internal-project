import React, { useState } from "react"
import { ButtonGroup } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box } from "@chakra-ui/layout"
import { Menu, Props } from "./interfaces"
import { StyledFollowButton, StyledMenuButton, StyledMenuUnderline } from "./styles"
import { About, AddTo } from "../.."
import { Share } from "./Share/Share"

export const Details: React.FC<Props> = props => {
  const [isReadMoreClicked, setIsReadMoreClicked] = useState<boolean>(false);
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

  const readMoreClickHandler = () => setIsReadMoreClicked(true);
  
  const buttons = menu.map(button => (
    <StyledMenuButton
      key={button.id}
      active={button.status}
      id={button.id}
      onClick={e => onSwitchActiveButtonHandler(e)}>{button.name}</StyledMenuButton>
  ))

  const details = menu.map(item => {
    let details;
    
    if (item.name === "About" && item.status) {
      const trimmedDescription = `${props.description.substr(0, 430)}...`;

      details = (
        <About
          key={item.id}
          nameSlug={props.nameSlug}
          genres={props.genres}
          genreSlug={props.genreSlug}
          platforms={props.platforms}
          description={isReadMoreClicked ? props.description : trimmedDescription}
          versions={props.versions}
          readMore={isReadMoreClicked}
          onReadMoreClick={readMoreClickHandler}
          website={props.website}
          reddit={props.reddit}  />
      )
    }
    
    if (item.name === "Add To" && item.status) details = <AddTo key={item.id}  />;
    if (item.name === "Share" && item.status) details = <Share key={item.id}  />;
    
    return details;
  });

  return (
    <Box
      position="relative"
      display="flex"
      w="var(--default-width)"
      m="0 auto 2rem">
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
        {details}
        
      </Box>
    </Box>
  );
}