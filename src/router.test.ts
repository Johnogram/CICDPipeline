import { router } from './router';

describe('Routes index', () => {
  test('exports router function', () => {
    expect(router).toBeInstanceOf(Object);
    expect(router).toHaveProperty('route');
    expect(router).toHaveProperty('use');
    expect(router).toHaveProperty('stack');
    expect(Array.isArray(router.stack)).toBeTruthy();
  });
});
