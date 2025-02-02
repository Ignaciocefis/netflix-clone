import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

};

const jestConfig = {
  collectCoverage: true, 
  collectCoverageFrom: [
    'pages/**/*.{js,ts,jsx,tsx}', 
    'components/**/*.{js,ts,jsx,tsx}',
  ],
  coverageReporters: ['text', 'lcov', 'json'], 
  coverageDirectory: './coverage',
}

export default createJestConfig(jestConfig)
