export interface PodcastDTO {
  title: {
    label: string;
  };
  'im:image': {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  'im:artist': {
    label: string;
    attributes: {
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      'im:id': string;
    };
  };
  summary: {
    label: string;
  };
}

export interface PodcastListDTO {
  feed: {
    entry: PodcastDTO[];
  };
}
