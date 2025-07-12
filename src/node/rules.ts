import type { Linter } from 'eslint';
import { sharedRules } from '../shared.js';

const rules = {
  ...sharedRules,
  'no-restricted-imports': ['error', { name: 'mongodb', message: 'Use @goatjs/db instead' }],
  'no-restricted-properties': [
    'error',
    { object: 'z', property: 'object', message: 'Use z.strictObject instead.' },
    { object: 'fs', property: 'access', message: 'Use @goatjs/node/fs instead' },
  ],
} satisfies Linter.RulesRecord;

export default rules;
