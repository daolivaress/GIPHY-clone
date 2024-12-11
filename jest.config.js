export default {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    // Ignorar todos los archivos de estilos
    "\\.(css|scss|sass|less)$": "identity-obj-proxy",
  }
};
