import { HTTPClient } from '@core/api/client';
import { useQuery } from '@tanstack/react-query';

import { KEYS } from './cache';
import { PodcastListDTO } from './dtos/PodcastListDTO';
import { mapPodcastListDTOToPodcastList } from './mappers/mapPodcastListDTOToPodcastList';

export const getPodcastListEndpoint =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

const client = new HTTPClient('https://itunes.apple.com/us/rss');

const getPodcastListFn = () => client.get<PodcastListDTO>('/toppodcasts/limit=100/genre=1310/json');

export const useGetPodcastList = () => {
  return useQuery({
    queryKey: [KEYS.ALL_PODCASTS],
    queryFn: getPodcastListFn,
    select: (data) => mapPodcastListDTOToPodcastList(data)
  });
};
