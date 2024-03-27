import React from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from '@navigation/RouterProvider';

import './app.css';
import { ReactQueryProvider } from './core/api/react-query';

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
