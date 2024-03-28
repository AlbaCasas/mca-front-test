import { useGetPodcast } from '../api/getPodcast';

export const useRenderEpisodeUseCase = ({
  podcastId,
  episodeId
}: {
  podcastId: string;
  episodeId: string;
}) => {
  const { data: podcast, isLoading } = useGetPodcast(podcastId);

  const episode = podcast?.episodes.find((episode) => episode.id === episodeId);

  return {
    episode,
    isLoading: isLoading
  };
};
