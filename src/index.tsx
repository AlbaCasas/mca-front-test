import React from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from '@navigation/RouterProvider';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>
);
