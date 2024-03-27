import { Image } from './Image';

export class Podcast {
  constructor(
    public title: string,
    public id: string,
    public image: Image,
    public author: string
  ) {}
}
