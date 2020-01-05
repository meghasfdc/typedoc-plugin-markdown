module.exports = {
  modulePaths: ['<rootDir>/dist'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text-summary', 'html'],
  collectCoverageFrom: ['<rootDir>/dist/**/*js'],
};
