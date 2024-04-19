module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "no-unused-vars": ["off", {
      "vars": "all",
      "args": "after-used",
      "caughtErrors": "all",
      "ignoreRestSiblings": false,
      "reportUsedIgnorePattern": false
    }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },  
}
