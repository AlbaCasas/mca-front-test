import { Image } from '@features/shared/domain/Image';

import { Episode } from './Episode';

export class Podcast {
  constructor(
    public title: string,
    public author: string,
    public image: Image,
    public descriptionFeedUrl: string,
    public episodes: Episode[]
  ) {}
}
