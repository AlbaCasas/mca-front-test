export interface PodcastDTO {
  artistName: string;
  trackName: string;
  trackCount: number;
  artworkUrl600: string;
  feedUrl: string;
  kind: 'podcast';
}

export interface EpisodeDTO {
  trackName: string;
  description: string;
  episodeFileExtension: string;
  episodeUrl: string;
  trackId: number;
  releaseDate: string;
  trackTimeMillis: number;
  kind: 'podcast-episode';
}

export interface PodcastLookupDTO {
  results: Array<PodcastDTO | EpisodeDTO>;
}
