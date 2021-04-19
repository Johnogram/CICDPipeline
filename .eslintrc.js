module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: [
      './tsconfig.eslint.json'
    ]
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  rules: {},
  ignorePatterns: ['/*.js', '/.circleci/**/*', '/coverage/**/*', '/dist/**/*', '/node_modules/**/*'],
  overrides: [
    {
      files: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
};
