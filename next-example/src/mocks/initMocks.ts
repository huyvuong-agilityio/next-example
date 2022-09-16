import type { SetupWorkerApi } from 'msw';
import { SetupServerApi } from 'msw/node';

const initMocks = async () => {
  if (typeof window === 'undefined') {
    const { server }: { server: SetupServerApi } = await import('./server');
    server.listen();
  } else {
    const { worker }: { worker: SetupWorkerApi } = await require('./browser');
    worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
};

export default initMocks;
