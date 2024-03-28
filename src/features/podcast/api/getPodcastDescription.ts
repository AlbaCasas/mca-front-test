import { HTTPClient } from '@core/api/client';
import { useQuery } from '@tanstack/react-query';

import { KEYS } from './cache';

const client = new HTTPClient('');

export const scrapePodcastDescriptionFn = async (descriptionFeedUrl: string) => {
  const xmlString = await client.get<string>(descriptionFeedUrl);
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
  const descriptionTag = xmlDoc.querySelector('description');
  if (descriptionTag?.textContent) {
    return descriptionTag.textContent.trim();
  } else {
    throw new Error('Description not found in podcast feed');
  }
};

export const useGetPodcastDescription = (podcastId: string, descriptionFeedUrl?: string) => {
  return useQuery({
    queryKey: [KEYS.PODCAST_DESCRIPTION, podcastId, descriptionFeedUrl],
    queryFn: () => descriptionFeedUrl && scrapePodcastDescriptionFn(descriptionFeedUrl),
    enabled: !!descriptionFeedUrl && !!podcastId
  });
};
