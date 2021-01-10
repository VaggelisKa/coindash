import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      <Text>Open to start working on your a!</Text>
      <StatusBar style="auto" />
    </Container>
  );
};


export default registerRootComponent(App);
