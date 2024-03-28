export class Episode {
  constructor(
    public title: string,
    public publicationDate: string,
    public fileUrl: string
  ) {}

  public async getDuration(): Promise<number> {
    return new Promise((resolve) => {
      const audio = new Audio(this.fileUrl);
      audio.addEventListener('loadedmetadata', function () {
        const duration = audio.duration;
        resolve(duration);
        audio.pause();
      });
      audio.load();
    });
  }
}
