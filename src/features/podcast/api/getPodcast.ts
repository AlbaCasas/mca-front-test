import { HTTPClient } from 'src/core/api/client';

import { useGetPodcastList } from '@features/home/api/getPodcastList';
import { useQuery } from '@tanstack/react-query';

import { KEYS } from './cache';
import { PodcastDTO } from './dtos/PodcastDTO';
import { mapPodcastDTOToPodcast } from './mappers/mapPodcastDTOToPodcast';

const client = new HTTPClient('https://itunes.apple.com/');

const getPodcastFn = (podcastId: string) =>
  client.get<PodcastDTO>('/lookup', { params: { id: podcastId } });

export const useGetPodcast = (podcastId: string) => {
  const { data: allPodcasts } = useGetPodcastList();
  const description = allPodcasts?.podcasts.find(({ id }) => id === podcastId)?.description;

  return useQuery({
    queryKey: [KEYS.PODCAST_DETAIL, podcastId],
    queryFn: () => getPodcastFn(podcastId),
    select: (podcastDto) => mapPodcastDTOToPodcast(podcastDto, description ?? '')
  });
};
