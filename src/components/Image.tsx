import { HTMLProps } from 'react';

import { cls } from '@core/styles/cls';

interface ImageProps extends HTMLProps<HTMLImageElement> {
  src: string;
  size?: number;
  alt?: string;
  className?: string;
  onClick?: () => void;
}

export const Image = ({ src, alt, className, size, onClick, ...props }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cls(
        'w-auto object-cover object-center',
        { [`h-[${size}px] w-[${size}px]`]: !!size },
        className
      )}
      onClick={onClick}
      {...props}
    />
  );
};
