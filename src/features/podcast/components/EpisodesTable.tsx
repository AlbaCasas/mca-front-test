import { ColumnType } from 'rc-table';
import { useNavigate } from 'react-router-dom';

import { Column, Skeleton } from '@components';
import { Table } from '@components/Table';

import { Episode } from '../domain/Episode';

const columns: ColumnType<string>[] = [
  {
    dataIndex: 'title',
    key: 'title',
    title: 'Title'
  },
  {
    dataIndex: 'publishDate',
    key: 'publishDate',
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
  const navigate = useNavigate();
  return (
    <Table
      columns={columns}
      data={episodes}
      rowKey="id"
      className="w-full flex-grow"
      onLoadingRender={() => (
        <Column className="px-2">
          <Skeleton height={50} lines={20} />
        </Column>
      )}
      rowTestId="episode-row"
      onRowClick={(episode: Episode) => navigate(`episode/${episode.id}`)}
      loading={isLoading}
    />
  );
};
