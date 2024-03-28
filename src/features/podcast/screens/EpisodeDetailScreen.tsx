import { useParams } from 'react-router-dom';

import { Card, Column, Skeleton, Text } from '@components';

import { useRenderEpisodeUseCase } from '../application/useRenderEpisodeUseCase';
import { LayoutWithPodcastCard } from '../components/LayoutWithPodcastCard';

const EpisodeDetail = ({ podcastId, episodeId }: { podcastId: string; episodeId: string }) => {
  const { episode, isLoading } = useRenderEpisodeUseCase({ podcastId, episodeId });

  const loading = !episode || isLoading;

  return (
    <LayoutWithPodcastCard podcastId={podcastId}>
      <Column className="h-full">
        <Card className="gap-3 p-4">
          {loading ? (
            <>
              <Skeleton height={40} />
              <Skeleton lines={8} height={14} />
              <Skeleton height={40} className="mt-3" />
            </>
          ) : (
            <>
              <Text title>{episode.title}</Text>
              <Text>{episode.description}</Text>
              <audio controls className="w-full mt-3">
                <source src={episode.fileUrl} type={`audio/${episode.fileFormat}`} />
              </audio>
            </>
          )}
        </Card>
      </Column>
    </LayoutWithPodcastCard>
  );
};

export const EpisodeDetailScreen = () => {
  const { id, episodeId } = useParams();
  if (!id || !episodeId) return null;
  return <EpisodeDetail podcastId={id} episodeId={episodeId} />;
};
