import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': 'off', // Nonaktifkan aturan multi-word
      'no-unused-vars': ['error', { args: 'none', varsIgnorePattern: '^_' }], // Error jika ada variabel tidak terpakai
      'no-undef': 'error', // Pastikan semua variabel didefinisikan
      'vue/script-setup-uses-vars': 'error', // Pastikan variabel yang digunakan di template ada di script setup
    },
    ignores: [
      '**/node_modules/**', // Contoh untuk mengabaikan folder node_modules
      '**/dist/**', // Contoh untuk mengabaikan folder dist
      '**/build/**', // Contoh untuk mengabaikan folder build
      'package-lock.json', // Contoh untuk mengabaikan package-lock.json
    ],
  },
];
