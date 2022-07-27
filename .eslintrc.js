module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 2018,
      sourceType: "module",
      jsx: true,
      project: ["./tsconfig.json"],
    },
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [
    "Keys.ts",
    "*.test.*",
    "**/mocks/*",
    "**/test/*",
    "packages/**/env/*",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": ["off"],
  },
};
