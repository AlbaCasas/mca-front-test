import React from 'react';

import { useGetPodcastList } from '../api/getPodcastList';

export const useListPodcastsUseCase = () => {
  const { data: podcastList } = useGetPodcastList();
  const [filter, setFilter] = React.useState<string>('');

  const filterList = React.useCallback((filter: string) => {
    setFilter(filter);
  }, []);

  const podcasts = React.useMemo(() => {
    if (!podcastList) return [];
    if (filter) {
      return podcastList.filter(filter).podcasts;
    }
    return podcastList.podcasts;
  }, [filter, podcastList]);

  const totalPodcasts = podcastList?.podcasts?.length || 0;
  const shownPodcasts = podcasts.length;

  return { podcasts, filterList, totalPodcasts, shownPodcasts };
};
