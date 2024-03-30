import { initMockServer } from '@core/tests/mockServer';
import { renderRoute } from '@core/tests/utils';
import { mapPodcastDTOToPodcast } from '@features/podcast/api/mappers/mapPodcastDTOToPodcast';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import { aPodcastWithTwoEpisodes } from '../fixtures/PodcastLookupFixture';
import { getPodcastHandler } from '../mocks/getPodcastHandler';

const mockHandlers = [getPodcastHandler(aPodcastWithTwoEpisodes)];
initMockServer(mockHandlers);

const podcast = mapPodcastDTOToPodcast(aPodcastWithTwoEpisodes);
const episode = podcast.episodes[0];

describe('Rendering Episode Information', () => {
  it('displays episode title, description, and an HTML audio player', async () => {
    const { container } = renderRoute(`/podcast/id/episode/${episode.id}`);

    await waitFor(() => {
      expect(screen.getByText(episode.title)).toBeInTheDocument();
      expect(screen.getByText(episode.description)).toBeInTheDocument();
      expect(container.querySelector('audio')).toBeInTheDocument();
    });
  });

  it('navigates back to the podcast detail screen when the podcast overview card is clicked', async () => {
    renderRoute(`/podcast/id/episode/${episode.id}`);

    await waitFor(() => {
      const podcastCard = screen.getByTestId('podcast-overview-card');
      fireEvent.click(podcastCard);

      expect(screen.getByTestId('podcast-detail-screen')).toBeInTheDocument();
    });
  });
});
