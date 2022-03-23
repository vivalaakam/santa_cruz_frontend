import React from 'react';
import { GlobalContainer } from './global-container';
import { GrpcContext } from './grpc-context';
import { Workouts } from './components/workouts';
import { BrowserRouter as Router } from 'react-router-dom';

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
