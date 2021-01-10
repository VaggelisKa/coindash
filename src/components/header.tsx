import React from 'react';
import { Image, Container } from 'styles/header.styles';

const Header = () => (
  <Container>
    <Image source={require('images/logo-image.png')} />
  </Container>
);

export default Header;
