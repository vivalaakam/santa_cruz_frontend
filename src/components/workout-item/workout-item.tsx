import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { GetWorkoutRequest, Workout } from '../../proto/workout_pb';
import { useWorkoutService } from '../../hooks/use-workout-service';

export const WorkoutItem = () => {
  const { topicId } = useParams();
  const [workout, setWorkout] = useState<Workout | null>(null);

  const client = useWorkoutService();

  useEffect(() => {
    if (!topicId) {
      return;
    }
    const request = new GetWorkoutRequest();
    request.setId(Number(topicId));

    client.getWorkout(request, {}).then((response) => {
      setWorkout(response);
    });
  }, [topicId, client]);

  const name = useMemo(
    () => (workout ? format(new Date(workout.getDay()), 'dd-MM-yyyy') : ''),
    [workout?.getDay()],
  );

  if (!workout) {
    return <div>Loading {topicId}</div>;
  }

  return <div>Workout for {name}</div>;
};
