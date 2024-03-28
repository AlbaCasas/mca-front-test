import React from 'react';

import { Card, Column, Image, Row, Skeleton, Text } from '@components';

export const OverviewCard = ({
  image,
  title,
  author,
  description,
  isLoading
}: {
  isLoading: boolean;
  image?: string;
  title?: string;
  author?: string;
  description?: { isLoading: boolean; text?: string };
}) => {
  const descriptionComponent = React.useMemo(() => {
    if (description?.isLoading || !description) return <Skeleton lines={4} height={24} />;
    if (!description.text) return <Text>No description found</Text>;
    return <Text html={description.text} />;
  }, [description]);

  if (isLoading) {
    return (
      <Card className="gap-3 p-0 pb-5 h-fit md:w-[500px]">
        <Skeleton className="flex-grow top-[-4px] h-[240px] md:h-[300px]" />
        <Column className="px-4 gap-4">
          <Skeleton lines={2} />
          <Column>
            <Skeleton lines={1} />
            <Skeleton lines={4} height={24} />
          </Column>
        </Column>
      </Card>
    );
  }

  return (
    <Card className="gap-3 p-0 pb-5 h-fit md:w-[500px]">
      <Image src={image || ''} className="h-[240px] md:h-[300px]" />
      <Column className="px-4 gap-4">
        <Column>
          <Text subtitle>{title}</Text>
          <Text className="text-lightText" bold>
            by {author}
          </Text>
        </Column>
        <Column className="gap-1 w-full">
          <Text bold>Description</Text>
          <Row className="w-full">{descriptionComponent}</Row>
        </Column>
      </Column>
    </Card>
  );
};
