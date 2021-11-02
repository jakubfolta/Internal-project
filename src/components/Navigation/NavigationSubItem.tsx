import React, { Fragment } from "react";
import { MenuList, MenuItem, MenuDivider } from "@chakra-ui/menu";

interface Items {
  items: {
    icon: any;
    name: string;
    hasDivider?: boolean;
  }[]
}

export const NavigationSubItem = ({items}: Items) => (
  <MenuList
    bg="var(--color-accent)"
    color="var(--color-white)"
    fontSize="var(--default-font-size)"
    marginTop="-0.8rem"
    border="none"
    borderRadius="0">
    {
      items.map((item: any) => (
        <Fragment>
          <MenuItem 
          icon={item.icon}
          _focus={{bg: "var(--color-accent-dark)"}}
          padding="1rem 2rem">
          {item.name}</MenuItem>
          {item.hasDivider && <MenuDivider />}
        </Fragment>
      ))
    }
  </MenuList>
)