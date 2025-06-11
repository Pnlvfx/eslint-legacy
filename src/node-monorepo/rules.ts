import type { Linter } from 'eslint';
import nodeRules from '../node/rules.js';

const rules = {
  ...nodeRules,
  'no-restricted-properties': [
    ...nodeRules['no-restricted-properties'],
    { object: 'process', property: 'cwd', message: 'Do not use process.cwd in monorepo setup packages as it can lead to wrong results.' },
  ],
} satisfies Linter.RulesRecord;

export default rules;
