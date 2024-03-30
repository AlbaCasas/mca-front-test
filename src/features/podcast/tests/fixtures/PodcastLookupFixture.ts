import { faker } from '@faker-js/faker';
import { EpisodeDTO, PodcastDTO, PodcastLookupDTO } from '@features/podcast/api/dtos/PodcastDTO';

const getPodcast: () => PodcastDTO = () => ({
  artistName: faker.person.firstName(),
  trackName: faker.music.songName(),
  trackCount: faker.number.int(),
  artworkUrl600: faker.internet.url(),
  feedUrl: '',
  kind: 'podcast'
});

const getEpisode: () => EpisodeDTO = () => ({
  trackName: faker.music.songName(),
  artistName: faker.person.firstName(),
  description: faker.string.alpha(10),
  episodeFileExtension: 'mp3',
  episodeUrl: faker.internet.url(),
  trackId: faker.number.int(),
  releaseDate: faker.date.anytime().toISOString(),
  trackTimeMillis: faker.number.int(),
  kind: 'podcast-episode'
});

export const aPodcastWithoutEpisodes: PodcastLookupDTO = {
  results: [getPodcast()]
};

export const aPodcastWithTwoEpisodes: PodcastLookupDTO = {
  results: [getPodcast(), getEpisode(), getEpisode()]
};
