import { HTMLProps } from 'react';

import { cls } from '@core/styles/cls';

interface TextProps extends Omit<HTMLProps<HTMLSpanElement>, 'title'> {
  small?: boolean;
  tag?: boolean;
  body?: boolean;
  title?: boolean;
  children?: React.ReactNode;
  subtitle?: boolean;
  bold?: boolean;
  pointer?: boolean;
  className?: string;
  tooltip?: string;
  html?: string;
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
  tooltip,
  html,
  ...props
}: TextProps) => {
  return (
    <span
      title={tooltip}
      dangerouslySetInnerHTML={html ? { __html: html } : undefined}
      className={cls(
        'text-text text-md font-light break-all',
        {
          'text-xs font-light': tag,
          'text-sm font-light': small,
          'text-md font-light': body,
          'text-xl font-bold': title,
          'text-lg font-bold': subtitle,
          'font-bold': bold,
          'cursor-pointer': pointer
        },
        className
      )}
      {...props}>
      {children}
    </span>
  );
};
