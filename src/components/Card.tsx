import React from 'react';

import { cls } from '@core/styles/cls';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div
    className={cls(
      'rounded overflow-hidden shadow-lg px-3 py-3 flex flex-col rounded-sm bg-white',
      className
    )}>
    {children}
  </div>
);
