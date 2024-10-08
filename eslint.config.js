// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const ignores = ['**/*.user.js', '**/Window.ts'];

export default tseslint.config(
  {
    ...eslint.configs.recommended,
    ignores,
    rules: {
      'require-await': 'off',
    },
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    ignores,
  })),
);
