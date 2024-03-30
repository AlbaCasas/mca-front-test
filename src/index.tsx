import React from 'react';
import { createRoot } from 'react-dom/client';
import 'react-loading-skeleton/dist/skeleton.css';

import { ReactQueryProvider } from '@core/api/react-query';
import { RouterProvider } from '@navigation/RouterProvider';

import './app.css';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ReactQueryProvider>
      <RouterProvider />
    </ReactQueryProvider>
  </React.StrictMode>
);
