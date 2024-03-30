import { HttpResponse, http } from 'msw';

import { PodcastListDTO } from '@features/home/api/dtos/PodcastListDTO';
import { getPodcastListEndpoint } from '@features/home/api/getPodcastList';

export const getPodcastListHandler = (fixture: PodcastListDTO) =>
  http.get(getPodcastListEndpoint, () => {
    return HttpResponse.json(fixture);
  });
