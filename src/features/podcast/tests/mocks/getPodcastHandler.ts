import { HttpResponse, http } from 'msw';

import { PodcastLookupDTO } from '@features/podcast/api/dtos/PodcastDTO';
import { getPodcastEndpoint } from '@features/podcast/api/getPodcast';

export const getPodcastHandler = (fixture: PodcastLookupDTO) =>
  http.get(getPodcastEndpoint, () => {
    return HttpResponse.json(fixture);
  });
