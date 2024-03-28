import React from 'react';

import { Column } from '@components';

import { useRenderPodcastUseCase } from '../application/useRenderPodcastUseCase';
import { OverviewCard } from './OverviewCard';

export const LayoutWithPodcastCard = ({
  podcastId,
  children
}: {
  podcastId: string;
  children: React.ReactNode;
}) => {
  const { podcast, isPodcastLoading, description, isDescriptionLoading } = useRenderPodcastUseCase({
    id: podcastId
  });
  return (
    <Column className="md:flex-row min-h-[100vh] bg-background px-4 py-8 sm:px-8 gap-6">
      <OverviewCard
        image={podcast?.image.src}
        title={podcast?.title}
        author={podcast?.author}
        podcastPath={`/podcast/${podcastId}`}
        description={{ text: description, isLoading: isDescriptionLoading }}
        isLoading={isPodcastLoading}
      />
      <Column className="gap-4 w-full md:min-w-[500px]">{children}</Column>
    </Column>
  );
};
