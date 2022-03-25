import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import {
  GetWorkoutRequest,
  UpdateWorkoutRequest,
  Workout,
  WorkoutStatus,
} from '../../proto/workout_pb';
import { useWorkoutService } from '../../hooks';
import { Button } from '../ui';
import { header } from './styled';
import { WorkoutRate, WorkoutRateRef } from '../workout-rate';

export const WorkoutItem = () => {
  const { workoutId } = useParams();
  const modalRef = useRef<WorkoutRateRef | null>(null);
  const [workout, setWorkout] = useState<Workout | null>(null);

  const client = useWorkoutService();

  const onClickFinish = useCallback(() => {
    if (!workoutId) {
      return;
    }

    const request = new UpdateWorkoutRequest();
    request.setId(Number(workoutId));
    request.setStatus(WorkoutStatus.FINISHED);

    client.updateWorkout(request, {}).then((response) => {
      setWorkout(response);
      modalRef.current?.showModal();
    });
  }, [workoutId, modalRef]);

  const onSubmitRate = useCallback(
    ({ rate, comment }) => {
      const request = new UpdateWorkoutRequest();
      request.setId(Number(workoutId));
      request.setRate(rate);
      request.setComment(comment);

      client.updateWorkout(request, {}).then((response) => {
        setWorkout(response);
        modalRef.current?.hideModal();
      });
    },
    [workoutId],
  );

  useEffect(() => {
    if (!workoutId) {
      return;
    }
    const request = new GetWorkoutRequest();
    request.setId(Number(workoutId));

    client.getWorkout(request, {}).then((response) => {
      setWorkout(response);
    });
  }, [workoutId, client]);

  const name = useMemo(
    () => (workout ? format(new Date(workout.getDay()), 'dd-MM-yyyy') : ''),
    [workout?.getDay()],
  );

  if (!workout) {
    return <div className={header}>Loading {workoutId}</div>;
  }

  return (
    <>
      <div className={header}>
        <span>Workout for {name}</span>
        {workout.getStatus() !== WorkoutStatus.FINISHED && (
          <Button onClick={onClickFinish}>Finish</Button>
        )}
      </div>
      <WorkoutRate ref={modalRef} onSubmit={onSubmitRate} />
    </>
  );
};
