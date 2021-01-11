import React from 'react';
import { Container, ActivityIndicator } from 'styles/spinner.styles';

const Spinner: React.FC = () => (
  <Container>
    <ActivityIndicator size="large" color="#f7941b" />
  </Container>
);

export default Spinner;
