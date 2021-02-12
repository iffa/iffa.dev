module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
