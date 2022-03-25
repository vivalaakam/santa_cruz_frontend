import React from 'react';
import clsx from 'clsx';
import { IconButtonProps } from './types';
import { container } from './styled';
import { Icon } from '../icon';

export const IconButton: React.FC<IconButtonProps> = ({ className, onClick, icon }) => (
  <button className={clsx(container, className)} onClick={onClick}>
    <Icon name={icon} />
  </button>
);
