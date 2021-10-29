import React from "react";
import { MenuList, MenuItem } from "@chakra-ui/menu";

interface Items {
  items: object[]
}

export const NavigationSubItem = ({items}: Items) => (
  <MenuList>
    {
      items.map((item: any)  => (
        <MenuItem icon={item.icon}>{item.name}</MenuItem>
      ))
    }

  </MenuList>
)