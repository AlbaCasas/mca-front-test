import { DateTime, Duration } from 'luxon';

export class Episode {
  public duration: string;

  constructor(
    public id: string,
    public title: string,
    public publicationDate: string,
    duration: number
  ) {
    this.publicationDate = DateTime.fromISO(publicationDate)
      .setLocale('en')
      .toLocaleString(DateTime.DATE_MED);
    this.duration = Duration.fromMillis(duration).toFormat("mm'm' ss's'");
  }
}
