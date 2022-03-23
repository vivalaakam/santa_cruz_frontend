import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './types';
import { container } from './styled';

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  ...props
}) => {
  const containerClassName = clsx(container, className);

  return (
    <button {...props} className={containerClassName} type={type}>
      {children}
    </button>
  );
};
