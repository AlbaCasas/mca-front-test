import { cls } from '@core/styles/cls';

interface TextProps {
  small?: boolean;
  tag?: boolean;
  body?: boolean;
  title?: boolean;
  children: React.ReactNode;
  subtitle?: boolean;
  bold?: boolean;
  pointer?: boolean;
  className?: string;
  maxLines?: number;
  tooltip?: string;
}

export const Text = ({
  children,
  small,
  body,
  title,
  subtitle,
  tag,
  bold,
  pointer,
  className,
  maxLines,
  tooltip
}: TextProps) => {
  return (
    <span
      title={tooltip}
      className={cls(
        'text-text text-md font-light',
        {
          'text-xs font-light': tag,
          'text-sm font-light': small,
          'text-md font-light': body,
          'text-xl font-bold': title,
          'text-lg font-bold': subtitle,
          'font-bold': bold,
          'cursor-pointer': pointer,
          [`line-clamp-${maxLines} text-ellipsis`]: !!maxLines
        },
        className
      )}>
      {children}
    </span>
  );
};
