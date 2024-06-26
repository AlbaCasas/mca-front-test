import { Image } from '../../shared/domain/Image';

export class Podcast {
  constructor(
    public title: string,
    public id: string,
    public image: Image,
    public author: string,
    public description: string
  ) {}
}
