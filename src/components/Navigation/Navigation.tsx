import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import { AtSignIcon, StarIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { NavigationSubItem } from './NavigationSubItem';

// const StyledNavigation = styled.nav`
//   display: flex;
//   align-self: stretch;  
//   margin-left: 1rem;
//   color: var(--color-white);
// `;

// const StyledList = styled.ul`
//   list-style: none;
//   display: flex;
// `;

const StyledMenuButton = styled(MenuButton)`
  /* && + div {
    inset: 5px;
  } */
  /* &&:first-of-type { margin-left: 1rem; }

  && span:first-child {
    margin-right: 0.3rem;
  }
  && span:last-child {
    margin-left: 0.3rem; */
  /* } */
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
          { name: "Advanced Search",
            icon: <AtSignIcon />,
            hasDivider: true },
          { name: "Coming Soon", icon: <AtSignIcon /> },
          { name: "Recently Released", icon: <AtSignIcon /> },
          { name: "Top 100",
            icon: <AtSignIcon />,
            hasDivider: true },
          { name: "Add Game", icon: <AtSignIcon /> }
        ]
      },
      {
        name: "Database",
        icon: <StarIcon />,
        subItems: [
          { name: "Games", icon: <AtSignIcon /> },
          { name: "Platforms",
            icon: <AtSignIcon />,
            hasDivider: true },
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
      }
    ]
  }

  render() {
    const navItems = this.state.navigationItems.map( item => 
      <Fragment>
        {/* <StyledListItem>
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
        </StyledListItem> */}

        <Menu isLazy autoSelect={false}>
          <MenuButton
              as={Button}
              leftIcon={item.icon}
              rightIcon={<ChevronDownIcon />}
              variant="flushed"
              alignSelf="stretch"
              height="auto"
              color="var(--color-white)"
              fontSize="var(--xsmall-font-size)"
              textTransform="uppercase"
              borderRadius="0"
              p="0 1.5rem"
              _focus={{boxShadow: "none"}}
              _active={{
                color: "var(--color-white)",
                bg: "var(--color-accent)",
                boxShadow: "none"}}
              _hover={{color: "#7214FF"}}>
              {item.name}
          </MenuButton>
          <NavigationSubItem items={item.subItems} />
        </Menu>
      </Fragment>
    )

    return(
      <Fragment>
        {/* <StyledNavigation>
          <Menu isLazy>
            <StyledList>
            </StyledList>
            </Menu>
          </StyledNavigation> */}
        {navItems}

      </Fragment>
    );
  }
}