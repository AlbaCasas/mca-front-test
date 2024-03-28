import { ColumnType } from 'rc-table';
import React from 'react';

import { Column, Skeleton } from '@components';
import { Table } from '@components/Table';

import { Episode } from '../api/domain/Episode';

const columns: ColumnType<string>[] = [
  {
    dataIndex: 'title',
    key: 'title',
    title: 'Title'
  },
  {
    dataIndex: 'publicationDate',
    key: 'publicationDate',
    title: 'Publish Date'
  },
  {
    dataIndex: 'duration',
    key: 'duration',
    title: 'Duration'
  }
];

export const EpisodesTable = ({
  episodes,
  isLoading
}: {
  episodes?: Episode[];
  isLoading: boolean;
}) => {
  return (
    <Table
      columns={columns}
      data={episodes}
      rowKey="id"
      className="w-full"
      onLoadingRender={() => (
        <Column className="px-2">
          <Skeleton height={50} lines={20} />
        </Column>
      )}
      loading={isLoading}
    />
  );
};
