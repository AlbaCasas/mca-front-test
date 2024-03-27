import { useGetPodcastList } from '../api/getPodcastList';

export const HomeScreen = () => {
  const { data } = useGetPodcastList();

  return <div>HomeScreen</div>;
};
