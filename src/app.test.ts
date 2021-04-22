describe('App', () => {
  test('unit tests run correctly', () => {
    // Expect no coverage to start to trigger pipeline fail later
    expect(true).toEqual(true);
  });

  test('second unit tests to fail', () => {
    // Expect no coverage to start to trigger pipeline fail later
    expect(true).toEqual(false);
  });
});
