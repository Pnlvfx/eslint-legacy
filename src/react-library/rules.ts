import type { Linter } from 'eslint';
import { sharedRules } from '../shared.js';

const rules = {
  ...sharedRules,
  'no-restricted-imports': [
    'error',
    {
      paths: [
        {
          name: 'react',
          importNames: ['useContext'],
          message: 'Use `use` hook instead for better performance and ergonomics.',
        },
      ],
    },
  ],
  'react/jsx-sort-props': 'error',
  'react/no-array-index-key': 'error',
  'react/prefer-read-only-props': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-no-literals': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/self-closing-comp': 'error',
} satisfies Linter.RulesRecord;

export default rules;
