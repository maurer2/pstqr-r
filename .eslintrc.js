const path = require('path');

module.exports = {
  root: true,
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  env: {
    browser: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended"
  ],
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "max-len": [1, 100, 2, {ignoreComments: true}],
    "no-debugger": "off",
    "no-console": "off",
    "lines-between-class-members": "off",
    'object-curly-newline': ['warn', {
      ObjectExpression: {
        multiline: true,
        minProperties: 1,
        consistent: true
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 2,
        consistent: true
      },
      ImportDeclaration: 'never',
      ExportDeclaration: 'never'
    }],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "tsx"] }],
    "@typescript-eslint/explicit-function-return-type": ["error", {
      "allowTypedFunctionExpressions": true
    }],
  },
  "parser": "@typescript-eslint/parser",
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.ts', '.tsx'],
        map: [
          ['@', path.resolve(__dirname, './src')],
        ],
      },
    },
  }
}