import SkeletonRL from 'react-loading-skeleton';

import { cls } from '@core/styles/cls';

interface SkeletonProps {
  lines?: number;
  height?: number;
  width?: number;
  radius?: number;
  className?: string;
  circle?: boolean;
  containerClassName?: string;
}

export const Skeleton = ({
  lines = 1,
  height,
  width,
  radius,
  className,
  circle,
  containerClassName
}: SkeletonProps) => {
  return (
    <SkeletonRL
      className={cls('h-full w-full', className)}
      count={lines}
      height={height}
      width={width}
      containerClassName={cls('h-full w-full', containerClassName)}
      circle={circle}
      style={{ borderRadius: radius }}
    />
  );
};
