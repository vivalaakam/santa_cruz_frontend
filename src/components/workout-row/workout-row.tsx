import React, { useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { WorkoutRowProps } from './types';
import { active, container } from './styled';

export const WorkoutRow: React.FC<WorkoutRowProps> = ({ item }) => {
  const name = useMemo(() => format(new Date(item.getDay()), 'dd-MM-yyyy'), [item.getDay()]);

  const className = useCallback(({ isActive }) => clsx(container, isActive && active), []);

  return (
    <NavLink className={className} to={`/${item.getId()}`}>
      {name}
    </NavLink>
  );
};
