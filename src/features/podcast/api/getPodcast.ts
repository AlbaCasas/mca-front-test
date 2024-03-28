import { HTTPClient } from 'src/core/api/client';

import { useQuery } from '@tanstack/react-query';

import { KEYS } from './cache';
import { PodcastLookupDTO } from './dtos/PodcastDTO';
import { mapPodcastDTOToPodcast } from './mappers/mapPodcastDTOToPodcast';

const client = new HTTPClient('https://itunes.apple.com/');

const getPodcastFn = (podcastId: string) =>
  client.get<PodcastLookupDTO>('/lookup', {
    params: {
      id: podcastId,
      entity: 'podcastEpisode',
      media: 'podcast'
    }
  });

export const useGetPodcast = (podcastId: string) => {
  return useQuery({
    queryKey: [KEYS.PODCAST_DETAIL, podcastId],
    queryFn: () => getPodcastFn(podcastId),
    select: (podcastDto) => mapPodcastDTOToPodcast(podcastDto)
  });
};
