import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwindcss from 'eslint-plugin-tailwindcss';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'public/**',
      'worker/.wrangler/**',
      'tests-e2e/playwright-report/**',
      // Bulk vocabulary data, not hand-edited application logic — content
      // issues (e.g. duplicate keys from generation passes) are tracked
      // separately, not enforced as lint errors.
      'data/*.js',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          // Pervasive intentional error-swallowing pattern across this
          // codebase: catch (e) {} / catch (e) { return fallback; }.
          // Mirrors the no-empty/allowEmptyCatch choice above.
          caughtErrors: 'none',
        },
      ],
      // Enforced in application code (see the tests/tests-e2e override below,
      // which turns it back off) — js/**, src/** are now genuinely any-free.
      '@typescript-eslint/no-explicit-any': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      // Pre-existing pattern across regex character classes (e.g. /[;,\/]/) —
      // cosmetically redundant escaping, not a bug. Downgraded so the rule
      // surfaces new occurrences without failing CI on ~24 legacy ones.
      'no-useless-escape': 'warn',
    },
  },
  {
    files: ['*.config.{js,ts}', 'playwright.config.ts', 'scripts/**/*.{js,cjs}'],
    languageOptions: { globals: globals.node },
  },
  {
    ...tailwindcss.configs.recommended,
    settings: {
      tailwindcss: {
        cssConfigPath: './css/tailwind.css',
      },
    },
    rules: {
      ...tailwindcss.configs.recommended.rules,
      // Off: this codebase deliberately keeps bare, semantic class names
      // (e.g. "duel-mode-btn") alongside Tailwind utilities as test/CSS
      // selector hooks — an established, pervasive convention (see
      // docs/CHANGELOG.md), not stray legacy classes. 825 findings, all
      // intentional.
      'tailwindcss/no-custom-classname': 'off',
      // Off: this app's whole theming model is runtime CSS custom
      // properties (var(--card), var(--border), ...) read via Tailwind
      // arbitrary values — that's not "unnecessary", it's the mechanism.
      // The suggested named-utility replacements (bg-bg, border-border)
      // happen to resolve to the same value today only because of how
      // css/tailwind.css maps @theme tokens onto those same variables;
      // rewriting ~721 call sites on that assumption is a separate,
      // large, purely-cosmetic project, not in scope here.
      'tailwindcss/no-unnecessary-arbitrary-value': 'off',
      // Off: prettier-plugin-tailwindcss (see .prettierrc) already sorts
      // classes on every format — this rule would just duplicate that,
      // noisily, for anyone who hasn't run `npm run format` yet.
      'tailwindcss/classnames-order': 'off',
    },
  },
  {
    // Mocking external APIs (Firebase, SpeechSynthesis, ServiceWorker, ...)
    // legitimately needs loose typing far more often than application code
    // does — enforcing no-explicit-any here would mostly fight test setup,
    // not catch real bugs.
    files: ['tests/**/*.{ts,tsx}', 'tests-e2e/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  prettierConfig,
);
