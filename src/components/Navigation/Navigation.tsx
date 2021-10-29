import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Menu, MenuButton, MenuList } from '@chakra-ui/menu';
import { AtSignIcon, StarIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { NavigationSubItem } from './NavigationSubItem';

const StyledNavigation = styled.nav`
  display: flex;
  align-self: stretch;
  margin-left: 1rem;
  color: var(--color-white);
`;

export default class Navigation extends Component {
  state = {
    navigationItems: [
      {
        name: "Games",
        icon: <StarIcon />,
        subItems: [
          { name: "Discover", icon: <AtSignIcon /> },
          { name: "Reviews", icon: <AtSignIcon /> },
          { name: "Advanced Search", icon: <AtSignIcon /> },
          { name: "Coming Soon", icon: <AtSignIcon /> },
          { name: "Recently Released", icon: <AtSignIcon /> },
          { name: "Top 100", icon: <AtSignIcon /> },
          { name: "Add Game", icon: <AtSignIcon /> }
        ]
      },
      {
        name: "Database",
        icon: <StarIcon />,
        subItems: [
          { name: "Games", icon: <AtSignIcon /> },
          { name: "Platforms", icon: <AtSignIcon /> },
          { name: "Developer API", icon: <AtSignIcon /> }
        ]
      },
      {
        name: "Community",
        icon: <StarIcon />,
        subItems: [
          { name: "Karma Hunters", icon: <AtSignIcon /> },
          { name: "Discord", icon: <AtSignIcon /> }
        ]
      },
      {
        name: "Help",
        icon: <StarIcon />,
        subItems: [
          { name: "About IGDB", icon: <AtSignIcon /> },
          { name: "Contributions", icon: <AtSignIcon /> },
          { name: "UserVoice", icon: <AtSignIcon /> },
          { name: "Contact", icon: <AtSignIcon /> }
        ]
      },
    ]
  }

  render() {
    const navItems = this.state.navigationItems.map( item => 
      <Fragment>
        <MenuButton
          as={Button}
          leftIcon={item.icon}
          rightIcon={<ChevronDownIcon />}
          variant="flushed"
          color="var(--color-white)"
          fontSize="var(--default-font-size)"
          textTransform="uppercase"
          h="100%"
          // _hover={{bg: "var(--color-accent"}}
          _focus={{boxShadow: "none"}}
          _active={{
            color: "inherit",
            bg: "#7214FF",
            boxShadow: "none"}}
          _hover={{color: "#7214FF"}}
          // _expanded={{color: "inherit", bg: "#7214FF"}}
          p="0 2rem">
          {item.name}
        </MenuButton>
        <NavigationSubItem items={item.subItems} />
      </Fragment>
    )

    return(
      <StyledNavigation>
        <Menu isLazy>
          {navItems}
        </Menu>
      </StyledNavigation>
    );
  }
}