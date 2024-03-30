import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { client } from '@core/api/react-query';
import { routes } from '@navigation/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

export const renderRoute = (route: string) =>
  render(
    <QueryClientProvider client={client}>
      <RouterProvider
        router={createMemoryRouter(routes, {
          initialEntries: [route]
        })}
      />
    </QueryClientProvider>
  );
