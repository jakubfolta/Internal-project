import React, { useState } from "react"
import { Box } from "@chakra-ui/layout"
import { Menu, Props } from "./interfaces"
import { CoverImage, Description } from "../.."

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

  return (
    <Box
      position="relative"
      display="flex"
      w="var(--default-width)"
      m="0 auto 2rem">
      <CoverImage src={props.src} />
      <Description
        nameSlug={props.nameSlug}
        genres={props.genres}
        genreSlug={props.genreSlug}
        platforms={props.platforms}
        versions={props.versions}
        description={props.description as string}
        website={props.website}
        reddit={props.reddit}
        menu={menu}
        isReadMoreClicked={isReadMoreClicked}
        onMenuButtonClick={onSwitchActiveButtonHandler}
        onReadMoreClick={readMoreClickHandler}
        buttonPosition={getActiveButtonPosition}  />
      
       {/* Rating component */}
      
    </Box>
  );
}