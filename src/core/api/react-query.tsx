import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ONE_DAY = 1000 * 60 * 60 * 24;
const config = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      // The cache lasts 1 day as specified by tech requirements
      staleTime: ONE_DAY
    }
  }
};

export const client = new QueryClient(config);

export const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
