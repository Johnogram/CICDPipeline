module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    './src/**/*',
    '!**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  coveragePathIgnorePatterns: ['/MockData/', '/Test/'],
};
