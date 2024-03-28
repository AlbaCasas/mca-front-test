import { EpisodeDetailScreen } from './screens/EpisodeDetailScreen';
import { PodcastDetailScreen } from './screens/PodcastDetailScreen';

export const PodcastRoutes = [
  {
    path: '/podcast/:id',
    element: <PodcastDetailScreen />
  },
  {
    path: '/podcast/:id/episode/:episodeId',
    element: <EpisodeDetailScreen />
  }
];
