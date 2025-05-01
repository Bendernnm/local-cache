module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    es2022: true,
    jest: true,
  },
  rules: {
    // Custom rules or overrides can be defined here
    'no-console': 'off', // Allow console logging (you can adjust this)
    indent: ['error', 2], // Enforce 2-space indentation
    quotes: ['error', 'single'], // Use single quotes for strings
    semi: ['error', 'always'], // Require semicolons
  },
};
