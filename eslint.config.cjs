const pluginVue = require('eslint-plugin-vue')
const eslintConfigPrettier = require('eslint-config-prettier')

module.exports = [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true,
        node: true
      }
    },
    plugins: {
      vue: pluginVue,
      prettier: require('eslint-plugin-prettier')
    },
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['node_modules', 'dist', 'public', '*.min.js', '*.min.css']
  },
  ...pluginVue.configs['flat/essential'],
  eslintConfigPrettier
]
