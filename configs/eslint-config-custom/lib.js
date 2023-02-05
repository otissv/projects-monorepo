const prettier = require('../prettier')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  processor: 'disable/disable',
  extends: [
    'eslint:recommended',
    'plugin:functional/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'functional', 'disable'],
  overrides: [
    {
      files: ['**/*.test.*', '**/*.tsx'],
      settings: {
        'disable/plugins': ['functional'],
      },
    },
  ],
  rules: {
    'react/jsx-key': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'explicit-module-boundary-types': 'off',
    'functional/functional-parameters': 'off',
    'functional/no-mixed-type': 'off',
    'functional/no-conditional-statement': [
      'error',
      {
        allowReturningBranches: true,
      },
    ],
    'prettier/prettier': ['error', prettier],
  },
  ignorePatterns: ['**/build', '**/dist', '**/node_modules'],
}
