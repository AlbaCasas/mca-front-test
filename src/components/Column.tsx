import React from 'react';

import { cls } from '@core/styles/cls';

interface ColumnProps {
  children: React.ReactNode;
  className?: string;
}

export const Column = ({ children, className }: ColumnProps) => (
  <div className={cls('flex flex-col', className)}>{children}</div>
);
