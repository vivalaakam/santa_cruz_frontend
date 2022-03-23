import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CreateWorkoutRequest, GetWorkoutsRequest, Workout } from '../../proto/workout_pb';
import { container, content, leftSide } from './styled';
import { WorkoutRow } from '../workout-row/workout-row';
import { WorkoutItem } from '../workout-item';
import { Button } from '../ui';
import { useWorkoutService } from '../../hooks/use-workout-service';
import { Divider } from '../ui/divider/divider';

function sortedWorkouts(workouts: Workout[]): Workout[] {
  const sorted = [...workouts];
  sorted.sort((a, b) => +new Date(b.getDay()) - +new Date(a.getDay()));
  return sorted;
}

export function Workouts() {
  const navigate = useNavigate();

  const client = useWorkoutService();

  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const request = new GetWorkoutsRequest();

    client.getWorkouts(request, {}).then((result) => {
      setWorkouts(sortedWorkouts(result.getWorkoutsList()));
    });
  }, []);

  const onClickAddWorkout = useCallback(() => {
    const request = new CreateWorkoutRequest();

    client.createWorkout(request, {}).then((response) => {
      setWorkouts((exists) => sortedWorkouts(exists.concat(response)));
      navigate(`/${response.getId()}`);
    });
  }, [navigate]);

  return (
    <div className={container}>
      <aside className={leftSide}>
        <Button onClick={onClickAddWorkout}>Add workout</Button>
        <Divider />
        {workouts.map((item) => (
          <WorkoutRow key={item.getId()} item={item} />
        ))}
      </aside>
      <main className={content}>
        <Routes>
          <Route path="/:topicId" element={<WorkoutItem />} />
          <Route index element={<h3>Please select a workout.</h3>} />
        </Routes>
      </main>
    </div>
  );
}
