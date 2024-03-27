import React from 'react';

import { cls } from '@core/styles/cls';

interface RowProps {
  children: React.ReactNode;
  className?: string;
}

export const Row = ({ children, className }: RowProps) => (
  <div className={cls('flex justify-start', className)}>{children}</div>
);
