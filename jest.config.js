// jest.config.js

module.exports = {
    rootDir: 'server', // Set the root directory to the 'server' folder
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.js'],
    moduleDirectories: ['node_modules'], // Add this line to specify the 'node_modules' directory
  };
  