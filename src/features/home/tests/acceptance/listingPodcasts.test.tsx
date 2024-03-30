import { initMockServer } from '@core/tests/mockServer';
import { renderRoute } from '@core/tests/utils';
import { mapPodcastListDTOToPodcastList } from '@features/home/api/mappers/mapPodcastListDTOToPodcastList';
import { aPodcastWithoutEpisodes } from '@features/podcast/tests/fixtures/PodcastLookupFixture';
import { getPodcastHandler } from '@features/podcast/tests/mocks/getPodcastHandler';
import { fireEvent, screen } from '@testing-library/react';

import { aPodcastListWithTwoPodcasts } from '../fixtures/PodcastListFixture';
import { getPodcastListHandler } from '../mocks/getPodcastListHandler';

const mockHandlers = [
  getPodcastListHandler(aPodcastListWithTwoPodcasts),
  getPodcastHandler(aPodcastWithoutEpisodes)
];
initMockServer(mockHandlers);
const { podcasts } = mapPodcastListDTOToPodcastList(aPodcastListWithTwoPodcasts);

describe('Rendering Podcast List in Home', () => {
  it('renders a list of podcast cards', async () => {
    renderRoute('/');

    const cards = await screen.findAllByTestId('podcast-card');
    expect(cards.length).toBe(podcasts.length);

    podcasts.forEach((podcast) => {
      expect(screen.getByText(podcast.title)).toBeInTheDocument();
    });
  });

  it('navigates to the podcast detail screen when a podcast card is clicked', async () => {
    renderRoute('/');
    const cards = await screen.findAllByTestId('podcast-card');
    const card = cards[0];

    fireEvent.click(card);

    expect(screen.getByTestId('podcast-detail-screen')).toBeInTheDocument();
  });
});
