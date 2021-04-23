import server from './server';

describe('Server', () => {
  test('exports Express server instance', () => {
    expect(server).toBeInstanceOf(Object);
    expect(server).toHaveProperty('listen');
    expect(server).toHaveProperty('use');
  });
});
