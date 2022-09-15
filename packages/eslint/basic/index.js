module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:promise/recommended',
  ],
  plugins: [
    'promise',
    'html',
    'unicorn',
  ],
  rules: {
    // import
    // 關閉禁止循環 import
    'import/no-cycle': 'off',
    // 關閉使用 export default
    'import/prefer-default-export': 'off',

    // common
    semi: ['error', 'never'],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    // 強制 promise reject 一定要是 Error object
    'prefer-promise-reject-errors': 'off',
    'max-len': 'off',
    // 關閉禁止變數命名使用底線
    'no-underscore-dangle': 'off',
    // 關閉禁止與外層 scope 重複命名變數
    'no-shadow': 'off',
    // 關閉禁止使用 ++
    'no-plusplus': 'off',
    // 警告在定義前使用
    'no-use-before-define': 'warn',
    // 禁止重新賦值給 function params, 操作 props 形式可以
    'no-param-reassign': ['error', { props: false }],
    // 關閉強制要求使用 parseInt 時顯式給定 radix
    radix: 'off',
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false,
    }],
    // function 定義的括號前要空格
    'space-before-function-paren': ['error', 'always'],
    // 關閉禁止巢狀三元運算式
    'no-nested-ternary': 'off',
    // 關閉強制使用解構賦值
    'prefer-destructuring': 'off',
    // 關閉 loop 不能有 await 限制
    'no-await-in-loop': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      // 關閉對 for..of 限制
      // {
      //   selector: 'ForOfStatement',
      //   message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      // },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.ts', '.d.ts'],
      },
      node: {
        extensions: [
          '.js',
          '.mjs',
          '.ts',
          '.d.ts',
        ],
      },
    },
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        quotes: ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'eol-last': ['error', 'never'],
        // turn off ts rules for json files
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/return-await': 'off',
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'files',
              'exports',
              'main',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
  ignorePatterns: [
    '!.*',
  ],
}
