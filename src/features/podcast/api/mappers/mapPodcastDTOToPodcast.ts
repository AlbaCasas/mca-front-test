import { Episode } from '../domain/Episode';
import { Podcast } from '../domain/Podcast';
import { EpisodeDTO, PodcastDTO, PodcastLookupDTO } from '../dtos/PodcastDTO';

export function mapPodcastDTOToPodcast(dto: PodcastLookupDTO): Podcast {
  const podcast = dto.results.find((item) => item.kind === 'podcast') as PodcastDTO;
  const episodes = dto.results.filter((item) => item.kind === 'podcast-episode') as EpisodeDTO[];

  const mappedEpisodes = episodes.map(
    (episode) => new Episode(episode.trackName, episode.releaseDate, episode.episodeUrl)
  );

  return new Podcast(
    podcast.trackName,
    podcast.artistName,
    {
      src: podcast.artworkUrl600,
      size: 600
    },
    podcast.feedUrl,
    mappedEpisodes
  );
}
