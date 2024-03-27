import { RouterProvider as RouterProviderReactRouter, createBrowserRouter } from 'react-router-dom';

import { routes } from './routes';

const router = createBrowserRouter(routes);

export const RouterProvider = () => <RouterProviderReactRouter router={router} />;
