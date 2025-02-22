module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'plugin:react-native/all'],
  plugins: ['@typescript-eslint', 'react-hooks', 'react-native', 'replace-hooks', 'import'],
  env: {
    'react-native/react-native': true,
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-empty-function': 0,
    'import/no-default-export': 2,
    'import/no-duplicates': 'error',
    'no-unused-modules': 'error',
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/no-color-literals': 2,
    'react-native/sort-styles': 0,
    'replace-hooks/no-forbidden-hooks': [
      'error',
      { useState: { tip: 'useSafeState', dependency: '@td-design/rn-hooks' } },
    ],
  },
};
