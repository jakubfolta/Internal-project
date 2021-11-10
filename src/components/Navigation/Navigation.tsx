import { Fragment, useState } from 'react';
import { Menu, MenuButton } from '@chakra-ui/menu';
import { AtSignIcon, StarIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { NavigationSubItem } from './NavigationSubItem';

export const Navigation: React.FC = () => {
  const [navigationItems, setNavigationItems] = useState([
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
    ]);

  const navItems = navigationItems.map( item => 
    <Fragment>
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

  return (
    <Fragment>
      {navItems}
    </Fragment>
  );
}