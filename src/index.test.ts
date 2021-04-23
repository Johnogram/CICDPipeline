const serverListenMock = jest.fn().mockName('server.listen');

jest.doMock('./server', () => ({
  listen: serverListenMock,
}));

describe('index.ts', () => {
  const requireIndexIsolated = (callback: () => void) => {
    jest.isolateModules(() => {
      /* eslint-disable global-require, @typescript-eslint/no-var-requires */
      require('./index');
      /* eslint-enable global-require, @typescript-eslint/no-var-requires */

      callback();
    });
  };

  test('runs server with port from environment', () => {
    const testPort = 123456;
    const oldPort = process.env.NODE_PORT;
    process.env.NODE_PORT = String(testPort);

    requireIndexIsolated(() => {
      expect(serverListenMock).toHaveBeenCalledWith(testPort);
    });

    process.env.NODE_PORT = oldPort;
  });

  test('runs server on default port 80', () => {
    const oldPort = process.env.NODE_PORT;
    delete process.env.NODE_PORT;

    requireIndexIsolated(() => {
      expect(serverListenMock).toHaveBeenCalledWith(3000);
    });

    process.env.NODE_PORT = oldPort;
  });
});
