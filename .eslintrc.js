module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/no-unused-components': 'warn',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-multiple-template-root': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'global-require': 'off',
    'func-names': ['error', 'as-needed'],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-escape': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-vars': 'warn',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'prefer-destructuring': 'off',
    'max-len': 'off',
    'import/no-absolute-path': 'off',
    'default-case': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'array-callback-return': 'off',
    'brace-style': 'off',
    'no-tabs': 'off',
    'guard-for-in': 'off',
    'eqeqeq': 'off',
    'no-unused-expressions': 'off',
  },
}