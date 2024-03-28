import RCTable from 'rc-table';
import React from 'react';
import type { PropsWithChildren } from 'react';

import { cls } from '@core/styles/cls';

import { BodyTd, BodyThead, BodyTr, HeaderTd, HeaderThead, Wrapper } from './components';

interface TableProps {
  data?: object[];
  columns: object[];
  className?: string;
  loading?: boolean;
  error?: boolean;
  rowKey?: string;
  onEmptyRender?: () => React.ReactNode;
  onErrorRender?: () => React.ReactNode;
  onLoadingRender?: () => React.ReactNode;
  onRowClick?: (item: object) => void;
}

export const Table = ({
  data,
  columns,
  className,
  loading,
  error,
  rowKey,
  onLoadingRender,
  onErrorRender,
  onEmptyRender,
  onRowClick
}: TableProps) => {
  const getEmptyText = () => {
    if (error && onErrorRender) return onErrorRender();
    if (loading && onLoadingRender) return onLoadingRender();
    if (onEmptyRender) return onEmptyRender();
    return;
  };
  return (
    <RCTable
      data={!loading ? data : undefined}
      columns={columns}
      className={cls('w-full rounded-md shadow-lg overflow-hidden', className)}
      emptyText={() => getEmptyText()}
      components={{
        table: (props: object) => <Wrapper {...props} />,
        header: {
          wrapper: (props: object) => <HeaderThead {...props} />,
          cell: ({ children, ...props }: PropsWithChildren) => (
            <HeaderTd {...props}>{children}</HeaderTd>
          )
        },
        body: {
          wrapper: (props: object) => <BodyThead {...props} />,
          cell: ({ children, ...props }: PropsWithChildren) => (
            <BodyTd {...props} loading={loading}>
              {children}
            </BodyTd>
          ),
          row: (props: object) => (
            <BodyTr
              {...props}
              className={cls({ 'cursor-pointer hover:bg-background': !!onRowClick })}
            />
          )
        }
      }}
      onRow={(record) => ({
        onClick: () => {
          if (onRowClick) onRowClick(record);
        }
      })}
      rowKey={rowKey}
    />
  );
};
