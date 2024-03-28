import React from 'react';
import { Outlet, RouteObject, useLocation } from 'react-router-dom';

import { HomeRoutes } from '@features/home/routes';
import { PodcastRoutes } from '@features/podcast/routes';

const RoutesWrapper = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RoutesWrapper />,
    children: [...HomeRoutes, ...PodcastRoutes]
  }
];
