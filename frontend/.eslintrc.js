const path = require("path");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:import/typescript", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["react", "prettier"],
  rules: {
    "@typescript-eslint/triple-slash-reference": "off",
    "prettier/prettier": ["error", { semi: true }],
  },
};
