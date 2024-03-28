import { Blocks } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { Column, Row, Text } from '@components';
import { useIsFetching } from '@tanstack/react-query';

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  const isFetching = useIsFetching();

  return (
    <Column>
      <Row className="bg-white w-full h-[80px] items-center shadow-md z-10 fixed px-8">
        <Blocks visible={!!isFetching} width={48} height={48} />
        <Link to="/" className="cursor-pointer flex flex-col">
          <Text title className="text-dark">
            Podcaster
          </Text>
          <Text small bold className="mt-[-8px]">
            by Alba Casas Arzúa
          </Text>
        </Link>
      </Row>
      <Column className="mt-[80px]">{children}</Column>
    </Column>
  );
};
