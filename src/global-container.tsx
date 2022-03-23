import React from 'react';
import { globals } from './theme';

export const GlobalContainer: React.FC<{}> = ({ children }) => (
  <div className={globals}>{children}</div>
);
