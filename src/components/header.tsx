import React from 'react';
import { Text } from 'react-native';
import { Image, Container, Title } from 'styles/header.styles';

const Header = () => (
  <Container>
    <Image source={require('images/logo-image.png')} />
    <Title>€oinDa$h</Title>
  </Container>
);

export default Header;
