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

  // Function that retrieves the XML from the podcast feedURL
  // and returns the content of the <description> tag if found
  public async scrapeDescription(): Promise<string> {
    const xmlString = await new HTTPClient(this.feedUrl).get<string>('');
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const descriptionTag = xmlDoc.querySelector('description');
    if (descriptionTag?.textContent) {
      return descriptionTag.textContent.trim();
    } else {
      throw new Error('Description not found in podcast feed');
    }
  }
}
