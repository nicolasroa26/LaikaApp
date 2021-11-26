module.exports = {
  root: true,
  globals: {
    module: true,
    require: true,
    console: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'import', 'react-hooks'],
  rules: {
    'no-console': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['react-native'],
  },
};
