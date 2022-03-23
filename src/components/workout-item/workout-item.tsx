import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import {
  GetWorkoutRequest,
  UpdateWorkoutRequest,
  Workout,
  WorkoutStatus,
} from '../../proto/workout_pb';
import { useWorkoutService } from '../../hooks/use-workout-service';
import { Button } from '../ui';
import { header } from './styled';

export const WorkoutItem = () => {
  const { topicId } = useParams();
  const [workout, setWorkout] = useState<Workout | null>(null);

  const client = useWorkoutService();

  const onClickFinish = useCallback(() => {
    if (!topicId) {
      return;
    }

    const request = new UpdateWorkoutRequest();
    request.setId(Number(topicId));
    request.setStatus(WorkoutStatus.FINISHED);

    client.updateWorkout(request, {}).then((response) => {
      setWorkout(response);
    });
  }, [topicId]);

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
    return <div className={header}>Loading {topicId}</div>;
  }

  return (
    <div className={header}>
      <span>Workout for {name}</span>
      {workout.getStatus() !== WorkoutStatus.FINISHED && (
        <Button onClick={onClickFinish}>Finish</Button>
      )}
    </div>
  );
};
