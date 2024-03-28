import { Podcast } from './Podcast';

export class PodcastList {
  constructor(public podcasts: Podcast[]) {}

  public filter(filter: string) {
    const sanitizedFilter = filter.trim().toLowerCase();
    return new PodcastList(
      this.podcasts?.filter(
        (podcast) =>
          podcast.author.toLowerCase().includes(sanitizedFilter) ||
          podcast.title.toLowerCase().includes(sanitizedFilter)
      )
    );
  }
}
