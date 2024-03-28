import { HTTPClient } from '@core/api/client';
import { Image } from '@features/shared/domain/Image';

import { Episode } from './Episode';

export class Podcast {
  constructor(
    public title: string,
    public author: string,
    public image: Image,
    private feedUrl: string,
    public episodes: Episode[]
  ) {}

  public async scrapeDescription(): Promise<string> {
    const xmlString = await new HTTPClient(this.feedUrl).get<string>('');
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const descriptionTag = xmlDoc.querySelector('description');
    if (descriptionTag?.textContent) {
      return descriptionTag.textContent.trim();
    } else {
      return 'Description not found';
    }
  }
}
