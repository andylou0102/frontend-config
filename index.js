module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
  },
  parserOptions: {
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@frontend-config/eslint-config-ts',
  ],
  rules: {
    'vue/no-v-html': 'off',
    'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
    'vue/no-template-shadow': 'off',
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: [],
    }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/no-duplicate-attr-inheritance': 'error',
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
}
