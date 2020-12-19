module.exports = {
    roots: ['<rootDir>'],
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
      '.+\\.(j|t)sx?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: "coverage",
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ]
};