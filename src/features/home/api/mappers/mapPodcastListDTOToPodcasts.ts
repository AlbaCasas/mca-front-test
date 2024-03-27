import { Podcast } from '@features/home/domain/Podcast';
import { PodcastList } from '@features/home/domain/PodcastList';

import { PodcastListDTO } from '../dtos/PodcastListDTO';

export function mapPodcastListDTOToPodcastList(dto: PodcastListDTO): PodcastList {
  return dto.feed.entry.map((entry) => {
    const title = entry.title.label;
    const id = entry.id.attributes['im:id'];
    // Based on tests, I'm assuming that the last image in the array will be the highest resolution one
    const numberOfImages = entry['im:image'].length;
    const imageObject = entry['im:image'][numberOfImages - 1];
    const image = {
      size: parseInt(imageObject.attributes.height),
      src: imageObject.label
    };
    const author = entry['im:artist'].label;
    return new Podcast(title, id, image, author);
  });
}
