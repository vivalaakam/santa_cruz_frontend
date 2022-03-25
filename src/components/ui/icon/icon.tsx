import React from 'react';
import { IconProps } from './types';

export const Icon: React.FC<IconProps> = ({ name }) => <span className={`icon-${name}`} />;
