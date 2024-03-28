import { cls } from '@core/styles/cls';

interface ImageProps {
  src: string;
  size?: number;
  alt?: string;
  className?: string;
  onClick?: () => void;
}

export const Image = ({ src, alt, className, size, onClick }: ImageProps) => {
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
    />
  );
};
