import { DateTime, Duration } from 'luxon';

export class Episode {
  public duration: string;

  constructor(
    public id: string,
    public title: string,
    public publishDate: string,
    public description: string,
    public fileUrl: string,
    public fileFormat: string,
    duration: number
  ) {
    this.publishDate = DateTime.fromISO(publishDate)
      .setLocale('en')
      .toLocaleString(DateTime.DATE_MED);
    this.duration = duration ? Duration.fromMillis(duration).toFormat("mm'm' ss's'") : '-';
  }
}
