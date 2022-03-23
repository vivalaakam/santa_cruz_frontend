import React from 'react';
import { GlobalContainer } from './global-container';
import { GrpcContext } from './grpc-context';
import { Workouts } from './components/workouts';

export function App() {

  return (
    <GlobalContainer>
      <GrpcContext.Provider value={process.env.GRPC_HOST ?? null}>
        <Workouts />
      </GrpcContext.Provider>
    </GlobalContainer>
  );
}
