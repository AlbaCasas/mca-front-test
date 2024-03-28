import React from 'react';
import { useParams } from 'react-router-dom';

import { Column, Text } from '@components';

import { useRenderPodcastUseCase } from '../application/useRenderPodcastUseCase';
import { EpisodesTable } from '../components/EpisodesTable';
import { OverviewCard } from '../components/OverviewCard';

const PodcastDetail = ({ id }: { id: string }) => {
  const { podcast, isPodcastLoading, description, isDescriptionLoading } = useRenderPodcastUseCase({
    id
  });

  return (
    <Column className="md:flex-row min-h-[100vh] bg-background px-4 py-8 sm:px-8 gap-6">
      <OverviewCard
        image={podcast?.image.src}
        title={podcast?.title}
        author={podcast?.author}
        description={{ text: description, isLoading: isDescriptionLoading }}
        isLoading={isPodcastLoading}
      />
      <Column className="gap-4 w-full md:min-w-[500px]">
        <Text subtitle>All Episodes ({podcast?.episodes.length})</Text>
        <EpisodesTable episodes={podcast?.episodes} isLoading={!podcast} />
      </Column>
    </Column>
  );
};

export const PodcastDetailScreen = () => {
  const { id } = useParams();
  if (!id) return null;
  return <PodcastDetail id={id} />;
};
