import { Card, Column, Image, Row, Text } from '@components';

import { useGetPodcastList } from '../api/getPodcastList';
import { PodcastCard } from '../components/PodcastCard';

export const HomeScreen = () => {
  const { data: podcasts } = useGetPodcastList();

  return (
    <Column className="gap-3 p-6 bg-background">
      <Text title>Most popular podcasts</Text>
      <Row className="flex-wrap gap-4">
        {podcasts?.map((podcast) => (
          <PodcastCard
            key={podcast.id}
            author={podcast.author}
            image={podcast.image.src}
            title={podcast.title}
          />
        ))}
      </Row>
    </Column>
  );
};
