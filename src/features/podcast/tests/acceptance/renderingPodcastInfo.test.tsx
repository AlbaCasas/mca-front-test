import { initMockServer } from '@core/tests/mockServer';
import { renderRoute } from '@core/tests/utils';
import { PodcastDTO } from '@features/podcast/api/dtos/PodcastDTO';
import { mapPodcastDTOToPodcast } from '@features/podcast/api/mappers/mapPodcastDTOToPodcast';
import { screen, waitFor } from '@testing-library/react';

import { aPodcastWithoutEpisodes } from '../fixtures/PodcastLookupFixture';
import { getPodcastHandler } from '../mocks/getPodcastHandler';

const mockHandlers = [getPodcastHandler(aPodcastWithoutEpisodes)];
initMockServer(mockHandlers);

const podcast = mapPodcastDTOToPodcast(aPodcastWithoutEpisodes);

describe('Rendering Podcast Information', () => {
  it('displays podcast title, author, and image correctly', async () => {
    renderRoute(`/podcast/id`);

    await waitFor(() => {
      expect(screen.getByTestId('podcast-image')).toHaveAttribute('src', podcast.image.src);
      expect(screen.getByText(podcast.title)).toBeInTheDocument();
      expect(screen.getByText(podcast.author, { exact: false })).toBeInTheDocument();
    });
  });
});
