import { Podcast } from '@features/home/domain/Podcast';
import { PodcastList } from '@features/home/domain/PodcastList';

import { PodcastListDTO } from '../dtos/PodcastListDTO';

export function mapPodcastListDTOToPodcastList(dto: PodcastListDTO): PodcastList {
  return dto.feed.entry.map((entry) => {
    const title = entry.title.label;
    const id = entry.id.attributes['im:id'];
    const image = entry['im:image'][0].label;
    const artistName = entry['im:artist'].label;
    return new Podcast(title, id, image, artistName);
  });
}
