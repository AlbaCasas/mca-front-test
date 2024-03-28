import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

const ONE_DAY = 1000 * 60 * 60 * 24;
const config = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      // By default, the cache will be persisted in local storage for 24 hours
      cacheTime: ONE_DAY
    }
  }
};

export const client = new QueryClient(config);

const persister = createSyncStoragePersister({
  storage: window.localStorage
});

export const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PersistQueryClientProvider persistOptions={{ persister, maxAge: ONE_DAY }} client={client}>
      {children}
    </PersistQueryClientProvider>
  );
};
