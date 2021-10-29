import React from 'react';
import { Logo } from '../../components/Logo/Logo';
import { Search } from '../../components/Search/Search';
import { StyledHeader } from '../styles/Header.styled';

export const Header = () => (
    <StyledHeader>
      <Logo />
      <Search />
    </StyledHeader>

)