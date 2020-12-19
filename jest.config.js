module.exports = {
    roots: ['<rootDir>'],
    preset: 'jest-puppeteer',
    transform: {
      '.+\\.(j|t)sx?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: "coverage",
    setupFilesAfterEnv: [
        "<rootDir>/src/jest.setup.ts"
    ]
};