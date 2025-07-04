import js from '@eslint/js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import onlyWarn from 'eslint-plugin-only-warn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import('eslint').Linter.Config}
 * */
export const config = [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        plugins: {
            import: importPlugin,
            '@stylistic/ts': stylisticTs,
        },
        rules: {
            'comma-dangle': ['error', 'always-multiline'],
            quotes: [2, 'single', { avoidEscape: true }],
            'import/no-duplicates': 'error',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                        'type',
                    ],
                    pathGroups: [
                        {
                            pattern: 'hono',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: '@hono/**',
                            group: 'external',
                            position: 'after',
                        },
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '@/middleware/**',
                            group: 'internal',
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['type'],
                    distinctGroup: false,
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            // indent: ['error', 4, { SwitchCase: 1 }],
            'object-curly-spacing': ['error', 'always'],
            semi: ['error', 'always'],
        },
    },
    { plugins: { onlyWarn } },
    { ignores: ['dist/**', 'node_modules/**', '.turbo/**', '.wrangler/**'] },
];
