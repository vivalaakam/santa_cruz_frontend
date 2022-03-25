import React from 'react';
import clsx from 'clsx';
import { TextAreaProps } from './types';
import { container } from './styled';

export const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {
  const textAreaClassName = clsx(container, className);
  return <textarea {...props} className={textAreaClassName} />;
};
