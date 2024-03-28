import React from 'react';
import { Outlet, RouteObject, useLocation } from 'react-router-dom';

import { HomeRoutes } from '@features/home/routes';
import { PodcastRoutes } from '@features/podcast/routes';
import { GlobalLayout } from '@features/shared/components/GlobalLayout';

const RoutesWrapper = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <GlobalLayout>
      <Outlet />
    </GlobalLayout>
  );
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RoutesWrapper />,
    children: [...HomeRoutes, ...PodcastRoutes]
  }
];
