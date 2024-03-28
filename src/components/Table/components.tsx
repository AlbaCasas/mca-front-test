import { Text } from '@components/Text';
import { cls } from '@core/styles/cls';

export const Wrapper = ({ className, ...props }: { className?: string }) => (
  <table {...props} className={cls('w-full shadow-lg', className)} />
);

export const HeaderThead = ({ className, ...props }: { className?: string }) => (
  <thead {...props} className={cls('bg-text', className)} />
);

export const HeaderTd = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <td {...props} className={cls('p-3', className)}>
    <Text small bold className="text-white">
      {children}
    </Text>
  </td>
);

export const BodyThead = ({ className, ...props }: { className?: string }) => (
  <thead {...props} className={cls('bg-white', className)} />
);

export const BodyTd = ({
  className,
  children,
  loading,
  ...props
}: {
  className?: string;
  loading?: boolean;
  children: React.ReactNode;
}) =>
  loading ? (
    <td {...props} className={cls('py-2', className)}>
      {children}
    </td>
  ) : (
    <td {...props} className={cls('p-3 w-fit', className)}>
      {children}
    </td>
  );

export const BodyTr = ({ className, ...props }: { className?: string }) => (
  <tr {...props} className={cls('border-b-[1px] border-gray last:border-0', className)} />
);
