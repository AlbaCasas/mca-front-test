import { Column, Row, Text } from '@components';

import useListPodcastsUseCase from '../application/useListPodcastsUseCase';
import { InputSearch } from '../components/InputSearch';
import { PodcastCard } from '../components/PodcastCard';

export const HomeScreen = () => {
  const { podcasts, filterList, totalPodcasts, shownPodcasts } = useListPodcastsUseCase();

  return (
    <Column className="gap-3 py-6 px-8 bg-background min-h-[100vh]">
      <Column>
        <Row className="w-full items-center flex-wrap gap-3">
          <Text title className="flex-grow text-center md:text-left">
            Most popular podcasts
          </Text>
          <InputSearch onChange={filterList} />
        </Row>
        {shownPodcasts !== totalPodcasts && (
          <Text>
            Showing {shownPodcasts} of {totalPodcasts} results
          </Text>
        )}
      </Column>
      <Row className="flex-wrap gap-4 justify-center md:justify-start">
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
