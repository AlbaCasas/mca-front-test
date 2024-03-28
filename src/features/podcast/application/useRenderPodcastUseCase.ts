import React from 'react';

import { useGetPodcast } from '../api/getPodcast';

export const useRenderPodcastUseCase = ({ id }: { id: string }) => {
  const isScrapped = React.useRef(false);
  const { data: podcast, isLoading } = useGetPodcast(id);

  // Description needs to be scrapped everytime from iTunes feedUrl property.
  // This is because its not being returned as a property by the lookup endpoint
  const [description, setDescription] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (!podcast || isScrapped.current) return;
    async function scrape() {
      try {
        const scrapedDescription = await podcast?.scrapeDescription();
        setDescription(scrapedDescription || '');
      } catch (error) {
        console.error(error);
      }
    }
    isScrapped.current = true;
    scrape();
  }, [podcast]);

  return {
    podcast,
    isPodcastLoading: isLoading || !podcast,
    description: description || '',
    isDescriptionLoading: description === null
  };
};
