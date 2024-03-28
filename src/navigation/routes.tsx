import { RouteObject } from 'react-router-dom';

import { HomeRoutes } from '@features/home/routes';
import { PodcastRoutes } from '@features/podcast/routes';

export const routes: RouteObject[] = [...HomeRoutes, ...PodcastRoutes];
