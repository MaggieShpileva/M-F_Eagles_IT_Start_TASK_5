module.exports = () => {
  const isDev = process.env.DEV === "true";

  return {
    collectCoverage: isDev ? false : true,
    collectCoverageFrom: ["src/**/*.{js,ts, tsx}"],
    coverageDirectory: "coverage",
    roots: ["<rootDir>/src"],
  };
};
