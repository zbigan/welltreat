import presets from 'ts-jest/presets/index.js'

const esmModules = ['@ionic', '@stencil', 'ionicons'];

export default {
  testEnvironment: "jsdom",
  transform: {
    ...presets.jsWithTsESM.transform,
  },
  transformIgnorePatterns: [
    `node_modules\/(?!(?:\.pnpm\/)?(${esmModules.join('|')}))`,
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
}
