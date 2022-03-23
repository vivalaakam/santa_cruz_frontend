import React, { useContext, useEffect, useState } from 'react';
import { GrpcContext } from '../../grpc-context';
import { WorkoutServiceClient } from '../../proto/WorkoutServiceClientPb';
import { GetWorkoutsRequest, Workout } from '../../proto/workout_pb';
import { Container } from './styled';
import { WorkoutRow } from '../workout-row/workout-row';

export function Workouts() {
  const grpc = useContext(GrpcContext);

  const client = new WorkoutServiceClient(grpc ?? 'http://localhost:50051', null, null);

  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const request = new GetWorkoutsRequest();

    client.getWorkouts(request, {}).then((result) => {
      setWorkouts(result.getWorkoutsList());
    });
  }, []);

  return (
    <Container>
      {workouts.map((item) => (
        <WorkoutRow key={item.getId()} item={item} />
      ))}
    </Container>
  );
}
