import { Fragment } from "react";
import { MenuList, MenuItem, MenuDivider } from "@chakra-ui/menu";
import { Props } from "./interfaces";

export const NavigationSubItem: React.FC<Props> = props => (
  <MenuList
    bg="var(--color-accent)"
    color="var(--color-white)"
    fontSize="var(--default-font-size)"
    marginTop="-0.8rem"
    border="none"
    borderRadius="0">
    {
      props.items.map(item => (
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