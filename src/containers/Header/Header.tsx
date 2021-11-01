import React from 'react';
import { DefaultButton } from '../../components/Button/Button';
import { Icon } from '@chakra-ui/icon';
import { BsTwitch } from 'react-icons/bs';
import { Logo } from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import { Search } from '../../components/Search/Search';
import { StyledHeader } from '../styles/Header.styled';

export const Header = () => (
    <StyledHeader>
      <Logo />
      <Search />
      <Navigation />
      <DefaultButton
        kind="a"
        leftIcon={<Icon as={BsTwitch} />}
        link="https://www.igdb.com/oauth/twitch">
        LOGIN WITH TWITCH</DefaultButton>
      
    </StyledHeader>

)