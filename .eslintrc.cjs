module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react-refresh',
    'react',
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never', // Allow imports of .js files without extension
        jsx: 'never', // Allow imports of .jsx files without extension
        ts: 'never', // Allow imports of .ts files without extension
        tsx: 'never', // Allow imports of .tsx files without extension
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/button-has-type': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/button-has-type': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-nested-ternary': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'public'],
      },
    },
  },
}
