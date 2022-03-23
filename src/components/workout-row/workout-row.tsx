import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { WorkoutRowProps } from './types';
import { Container } from './styled';

export const WorkoutRow: React.FC<WorkoutRowProps> = ({ item }) => {
  const name = useMemo(() => format(new Date(item.getDay()), 'dd-MM-yyyy'), [item.getDay()]);

  return <Container>{name}</Container>;
};
