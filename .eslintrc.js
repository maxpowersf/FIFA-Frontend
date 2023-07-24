module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
      plugins: ['import', 'ordered-imports', 'jsdoc', 'prefer-arrow', 'rxjs'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        '@angular-eslint/no-forward-ref': 'error',
        '@typescript-eslint/array-type': [
          'warn',
          {
            default: 'array',
          },
        ],
        '@typescript-eslint/ban-types': [
          'warn',
          {
            types: {
              Object: {
                message: 'Avoid using the `Object` type. Did you mean `object`?',
              },
              Boolean: {
                message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
              },
              Number: {
                message: 'Avoid using the `Number` type. Did you mean `number`?',
              },
              String: {
                message: 'Avoid using the `String` type. Did you mean `string`?',
              },
              Symbol: {
                message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
              },
            },
          },
        ],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'enum',
            format: ['UPPER_CASE', 'StrictPascalCase', 'camelCase'],
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE', 'StrictPascalCase', 'camelCase'],
          },
        ],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            ignoreTypeValueShadow: true,
          },
        ],
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowTernary: true,
          },
        ],
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/quotes': [
          'error',
          'single',
          {
            allowTemplateLiterals: true,
            avoidEscape: true,
          },
        ],
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'always',
            types: 'prefer-import',
            lib: 'always',
          },
        ],
        '@typescript-eslint/unified-signatures': 'error',
        'no-restricted-syntax': 'warn',
        'func-names': 'off',
        'no-param-reassign': 'warn',
        'prefer-arrow-callback': 'off',
        'new-cap': 'off',
        'import/no-extraneous-dependencies': 'off',
        complexity: 'off',
        'constructor-super': 'error',
        eqeqeq: ['error', 'smart'],
        'guard-for-in': 'error',
        'id-blacklist': [
          'error',
          'any',
          'Number',
          'String',
          'string',
          'Boolean',
          'boolean',
          'Undefined',
          'undefined',
        ],
        'id-match': 'error',
        'import/no-deprecated': 'warn',
        'ordered-imports/ordered-imports': ['error'],
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-indentation': 'error',
        'max-classes-per-file': 'off',
        'no-bitwise': 'off',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': [
          'error',
          {
            allow: [
              'log',
              'warn',
              'dir',
              'timeLog',
              'assert',
              'clear',
              'count',
              'countReset',
              'group',
              'groupEnd',
              'table',
              'debug',
              'info',
              'dirxml',
              'error',
              'groupCollapsed',
              'Console',
              'profile',
              'profileEnd',
              'timeStamp',
              'context',
            ],
          },
        ],
        'no-debugger': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'off',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'off',
        'no-new-wrappers': 'error',
        'no-restricted-imports': ['error', 'ramda'],
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': [
          'error',
          {
            allow: ['_val', '__', '_satellite'],
            allowAfterThis: true,
            allowAfterSuper: true,
            enforceInMethodNames: false,
          },
        ],
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-var': 'error',
        'object-shorthand': 'warn',
        'one-var': ['error', 'never'],
        'prefer-arrow/prefer-arrow-functions': ['warn'],
        'prefer-const': 'error',
        radix: 'error',
        // 'rxjs/no-unsafe-takeuntil': 'error',
        'spaced-comment': 'off',
        'use-isnan': 'error',
        'valid-typeof': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
};