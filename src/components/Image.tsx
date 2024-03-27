import { cls } from '@core/styles/cls';

interface ImageProps {
  src: string;
  size?: number;
  alt?: string;
  className?: string;
}

export const Image = ({ src, alt, className, size }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cls('w-auto object-cover object-center', { [`h-[${size}px]`]: !!size }, className)}
    />
  );
};
