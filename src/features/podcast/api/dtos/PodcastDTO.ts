export interface PodcastDTO {
  results: [
    {
      artistName: string;
      trackName: string;
      trackCount: number;
      artworkUrl600: string;
    }
  ];
}
