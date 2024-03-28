import React from 'react';
import { useParams } from 'react-router-dom';

import { Card, Column, Image, Text } from '@components';
import { Table } from '@components/Table';

import { useGetPodcast } from '../api/getPodcast';

const columns = [
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

const PodcastDetail = ({ id }: { id: string }) => {
  const { data: podcast } = useGetPodcast(id);

  const [description, setDescription] = React.useState<string | undefined>();

  React.useEffect(() => {
    async function scrape() {
      const scrapedDescription = await podcast?.scrapeDescription();
      setDescription(scrapedDescription);
    }
    scrape();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!podcast) return;

  return (
    <Column className="md:flex-row min-h-[100vh] bg-background px-4 py-8 sm:px-8 gap-6">
      <Card className="gap-3 p-0 md:max-w-[400px] h-fit">
        <Image src={podcast.image.src} />
        <Column className="px-4 pb-7 gap-4">
          <Column>
            <Text>Podcast</Text>
            <Text subtitle>{podcast.title}</Text>
            <Text className="text-lightText" bold>
              by {podcast.author}
            </Text>
          </Column>
          <Column className="gap-1">
            <Text>About</Text>
            <Text small>{description}</Text>
          </Column>
        </Column>
      </Card>
      <Column className="gap-4 w-full md:min-w-[500px]">
        <Text subtitle>All Episodes ({podcast.episodes.length})</Text>
        <Table columns={columns} data={podcast.episodes} rowKey="id" className="w-full" />
      </Column>
    </Column>
  );
};

export const PodcastDetailScreen = () => {
  const { id } = useParams();
  if (!id) return null;
  return <PodcastDetail id={id} />;
};
