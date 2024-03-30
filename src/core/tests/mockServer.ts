import { HttpHandler } from 'msw';
import { setupServer } from 'msw/node';

export const initMockServer = (handlers: HttpHandler[]) => {
  const server = setupServer(...handlers);
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
};
