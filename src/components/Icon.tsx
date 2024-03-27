import React from 'react';
import type { SyntheticEvent } from 'react';

import { cls } from '@core/styles/cls';

import { Icon as IconType, icons } from './icons';

interface IconProps {
  name: IconType;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: (e: SyntheticEvent) => void;
}

export const Icon = ({ name, className, size = 'medium', onClick }: IconProps) => (
  <div
    onClick={onClick}
    className={cls(
      'text-2xl flex items-center justify-center text-text',
      {
        'text-xs': size === 'small',
        'text-md': size === 'medium',
        'text-lg': size === 'large'
      },

      className
    )}>
    {icons[name]}
  </div>
);
