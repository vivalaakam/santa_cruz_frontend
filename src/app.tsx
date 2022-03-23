import React from 'react';
import { styled } from '@linaria/react';
import { GlobalContainer } from './global-container';

const Container = styled.div``;

export function App() {
  return (
    <GlobalContainer>
      <Container>content</Container>
    </GlobalContainer>
  );
}
