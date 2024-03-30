import { useParams } from 'react-router-dom';

import { Text } from '@components';

import { useRenderPodcastUseCase } from '../application/useRenderPodcastUseCase';
import { EpisodesTable } from '../components/EpisodesTable';
import { LayoutWithPodcastCard } from '../components/LayoutWithPodcastCard';

const PodcastDetail = ({ id }: { id: string }) => {
  const { podcast, isPodcastLoading } = useRenderPodcastUseCase({
    id
  });

  return (
    <div data-testid="podcast-detail-screen">
      <LayoutWithPodcastCard podcastId={id}>
        <Text subtitle data-testid="number-episodes">
          All Episodes ({podcast?.episodes.length})
        </Text>
        <EpisodesTable episodes={podcast?.episodes} isLoading={isPodcastLoading} />
      </LayoutWithPodcastCard>
    </div>
  );
};

export const PodcastDetailScreen = () => {
  const { id } = useParams();
  if (!id) return null;
  return <PodcastDetail id={id} />;
};
