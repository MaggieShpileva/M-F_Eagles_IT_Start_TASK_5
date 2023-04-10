// const customJestConfig = {
//   moduleDirectories: ["node_modules", "<rootDir>/"],
//   testEnvironment: "jest-environment-jsdom",
//   setupFilesAfterEnv: ["./setupTests.js"],
//   testMatch: ["**/*.test.*"],
//   collectCoverageFrom: [
//     "<rootDir>/src/**/*.tsx",
//     "!<rootDir>/src/**/*.stories.tsx",
//     "!**/__snapshots__/**",
//   ],
// };
module.exports = () => {
  // only collect cover if true
  const isDev = process.env.DEV === "true";

  return {
    collectCoverage: isDev ? false : true,
    collectCoverageFrom: ["src/**/*.{js,ts, tsx}"],
    coverageDirectory: "coverage",
    roots: ["<rootDir>/src"],
  };
};
