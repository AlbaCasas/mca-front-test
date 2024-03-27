import { Podcast } from './Podcast';

export class PodcastList {
  constructor(public podcasts: Podcast[]) {}

  public getFilteredList(filter: string) {
    const sanitizedFilter = filter.trim().toLowerCase();
    return this.podcasts?.filter(
      (podcast) =>
        podcast.author.toLowerCase().includes(sanitizedFilter) ||
        podcast.title.toLowerCase().includes(sanitizedFilter)
    );
  }
}
