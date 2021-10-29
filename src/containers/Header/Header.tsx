import React from 'react';
import { Logo } from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import { Search } from '../../components/Search/Search';
import { StyledHeader } from '../styles/Header.styled';

export const Header = () => (
    <StyledHeader>
      <Logo />
      <Search />
      <Navigation />
      
    </StyledHeader>

)