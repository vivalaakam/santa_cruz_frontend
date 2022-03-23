import { useContext, useMemo } from 'react';
import { GrpcContext } from '../grpc-context';
import { WorkoutServiceClient } from '../proto/WorkoutServiceClientPb';

export const useWorkoutService = () => {
  const grpc = useContext(GrpcContext);

  return useMemo(
    () => new WorkoutServiceClient(grpc ?? 'http://localhost:50051', null, null),
    [grpc],
  );
};
