module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|mjs|html)$': ['ts-jest', { useESM: true }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@angular)/', 
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
};
