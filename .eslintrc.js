module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'default', 'error'],
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
