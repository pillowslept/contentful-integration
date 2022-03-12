import React from 'react';
import logo from '../../logo.svg';

import {
  DefaultLink,
  Container,
  LogoImg,
  OptionsContainer,
} from './NavBar.css';

const NavBar = () => {
  return (
    <Container>
      <OptionsContainer>
        <LogoImg src={logo} alt="logo" />
        <DefaultLink to="/">
          Contentful Integration APP
        </DefaultLink>
      </OptionsContainer>
      <OptionsContainer>
        <DefaultLink to="/simple-page-1">
          Simple Page 1
        </DefaultLink>
        <DefaultLink to="/simple-page-2">
          Simple Page 2
        </DefaultLink>
        <DefaultLink to="/products/jacket">
          Jacket
        </DefaultLink>
        <DefaultLink to="/products/helmet">
          Helmet
        </DefaultLink>
      </OptionsContainer>
    </Container>
  );
};

export default NavBar;
