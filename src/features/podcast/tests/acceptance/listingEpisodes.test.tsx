import { initMockServer } from '@core/tests/mockServer';
import { renderRoute } from '@core/tests/utils';
import { mapPodcastDTOToPodcast } from '@features/podcast/api/mappers/mapPodcastDTOToPodcast';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import { aPodcastWithTwoEpisodes } from '../fixtures/PodcastLookupFixture';
import { getPodcastHandler } from '../mocks/getPodcastHandler';

const mockHandlers = [getPodcastHandler(aPodcastWithTwoEpisodes)];
initMockServer(mockHandlers);

const podcast = mapPodcastDTOToPodcast(aPodcastWithTwoEpisodes);

describe('Podcast Episodes Listing', () => {
  beforeEach(() => {
    renderRoute(`/podcast/id`);
  });

  it('displays the number of episodes for the podcast', async () => {
    const numberOfEpisodes = screen.getByTestId('number-episodes');
    await waitFor(() => expect(numberOfEpisodes).toHaveTextContent(`${podcast.episodes.length}`));
  });

  it('renders a list of episodes with title, duration, and publish date', async () => {
    podcast.episodes.forEach(async (episode) => {
      await waitFor(() => {
        expect(screen.getByText(episode.title)).toBeInTheDocument();
        expect(screen.getByText(episode.duration)).toBeInTheDocument();
        expect(screen.getByText(episode.publishDate)).toBeInTheDocument();
      });
    });
  });

  it('navigates to the episode detail screen when an episode is clicked', async () => {
    const episodes = await screen.findAllByTestId('episode-row');
    fireEvent.click(episodes[0]);
    expect(screen.getByTestId('episode-detail-screen')).toBeInTheDocument();
  });
});
