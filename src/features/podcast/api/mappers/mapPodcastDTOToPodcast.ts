import { Podcast } from '../domain/Podcast';
import { PodcastDTO } from '../dtos/PodcastDTO';

export function mapPodcastDTOToPodcast(dto: PodcastDTO, description: string): Podcast {
  const podcast = dto.results[0];

  return new Podcast(
    podcast.trackName,
    podcast.artistName,
    {
      src: podcast.artworkUrl600,
      size: 600
    },
    description
  );
}
