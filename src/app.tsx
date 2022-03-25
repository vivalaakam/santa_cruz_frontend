import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContainer } from './global-container';
import { GrpcContext } from './grpc-context';
import { Workouts } from './components/workouts';
import '../public/css/fontello-embedded.css';

export function App() {
  return (
    <GlobalContainer>
      <GrpcContext.Provider value={process.env.GRPC_HOST ?? null}>
        <Router>
          <Workouts />
        </Router>
      </GrpcContext.Provider>
    </GlobalContainer>
  );
}
