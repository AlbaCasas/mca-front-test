import { Image } from '@features/shared/domain/Image';

export class Podcast {
  constructor(
    public title: string,
    public author: string,
    public image: Image,
    public description: string
  ) {}
}
