import React, { useCallback } from 'react';
import clsx from 'clsx';
import { IconButton } from '../ui';
import { RateButtonProps } from './types';
import { rate } from './styled';

export const RateButton: React.FC<RateButtonProps> = ({ onClick, index, active, ...props }) => {
  const onClickButton = useCallback(() => {
    onClick(index);
  }, [index]);

  const className = clsx(rate, index === active && 'active');

  return <IconButton {...props} className={className} onClick={onClickButton} />;
};
