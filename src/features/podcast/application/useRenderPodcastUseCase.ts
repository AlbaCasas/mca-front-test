import { useGetPodcast } from '../api/getPodcast';
import { useGetPodcastDescription } from '../api/getPodcastDescription';

export const useRenderPodcastUseCase = ({ id }: { id: string }) => {
  const { data: podcast, isLoading } = useGetPodcast(id);
  const { data: description, isLoading: isDescriptionLoading } = useGetPodcastDescription(
    id,
    podcast?.descriptionFeedUrl
  );

  return {
    podcast,
    isPodcastLoading: isLoading || !podcast,
    description: description,
    isDescriptionLoading: isDescriptionLoading
  };
};
