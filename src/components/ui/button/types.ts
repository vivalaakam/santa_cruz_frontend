import React from 'react';

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset';
};
