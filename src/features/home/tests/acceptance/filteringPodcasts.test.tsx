import { initMockServer } from '@core/tests/mockServer';
import { renderRoute } from '@core/tests/utils';
import { mapPodcastListDTOToPodcastList } from '@features/home/api/mappers/mapPodcastListDTOToPodcastList';
import { fireEvent, screen } from '@testing-library/react';

import { aPodcastListWithTwoPodcasts } from '../fixtures/PodcastListFixture';
import { getPodcastListHandler } from '../mocks/getPodcastListHandler';

const mockHandlers = [getPodcastListHandler(aPodcastListWithTwoPodcasts)];
initMockServer(mockHandlers);

const { podcasts } = mapPodcastListDTOToPodcastList(aPodcastListWithTwoPodcasts);
const [firstPodcast, secondPodcast] = podcasts;

describe('Filtering podcasts', () => {
  beforeEach(() => renderRoute('/'));

  it('displays all podcasts unfiltered when the input is empty', async () => {
    expect(await screen.findByText(firstPodcast.title)).toBeInTheDocument();
    expect(await screen.findByText(secondPodcast.title)).toBeInTheDocument();
  });

  it('filters podcasts by podcast title', async () => {
    const input = screen.getByTestId('input-filter');
    fireEvent.change(input, { target: { value: firstPodcast.title } });

    expect(await screen.findByText(firstPodcast.title)).toBeInTheDocument();
    expect(await screen.queryByText(secondPodcast.title)).not.toBeInTheDocument();
  });

  it('filters podcasts by podcast author', async () => {
    const input = screen.getByTestId('input-filter');
    fireEvent.change(input, { target: { value: firstPodcast.author } });

    expect(await screen.findByText(firstPodcast.title)).toBeInTheDocument();
    expect(await screen.queryByText(secondPodcast.title)).not.toBeInTheDocument();
  });
});
