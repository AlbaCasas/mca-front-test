import { DateTime, Duration } from 'luxon';

const ONE_HOUR = 1000 * 60 * 60;
export class Episode {
  constructor(
    public id: string,
    public title: string,
    private publishDateISO: string,
    public description: string,
    public fileUrl: string,
    public fileFormat: string,
    private durationMillis: number
  ) {}

  public get publishDate() {
    return DateTime.fromISO(this.publishDateISO).setLocale('en').toLocaleString(DateTime.DATE_MED);
  }

  public get duration() {
    if (!this.durationMillis) return '-';
    if (this.durationMillis > ONE_HOUR)
      return Duration.fromMillis(this.durationMillis).toFormat("h'h' mm'm' ss's'");
    return Duration.fromMillis(this.durationMillis).toFormat("mm'm' ss's'");
  }
}
