import { useParams } from 'react-router-dom';

import { useGetPodcast } from '../api/getPodcast';

const PodcastDetail = ({ id }: { id: string }) => {
  const { data: podcast } = useGetPodcast(id);

  console.log(podcast);

  return <div>test</div>;
};

export const PodcastDetailScreen = () => {
  const { id } = useParams();
  if (!id) return null;
  return <PodcastDetail id={id} />;
};
