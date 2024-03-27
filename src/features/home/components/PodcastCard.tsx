import React from 'react';

import { Card, Column, Image, Text } from '@components';

export const PodcastCard = React.memo(
  ({ image, title, author }: { image: string; title: string; author: string }) => {
    return (
      <Card className="w-full sm:w-[170px]  box-content text-center gap-3 hover:scale-105 transition-all cursor-pointer">
        <Image src={image} size={170} className="rounded-sm" alt={title} />
        <Column className="gap-1">
          <Text bold className="line-clamp-2" tooltip={title}>
            {title}
          </Text>
          <Text small className="mt-auto text-lightText">
            {author}
          </Text>
        </Column>
      </Card>
    );
  }
);

PodcastCard.displayName = 'PodcastCard';
