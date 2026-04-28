module.exports = {
  root: true, // Make sure ESLint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ECMAScript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the React version
    }
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec
    node: true // Enables Node.js global variables and Node.js scoping
  },
  plugins: ['simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // This is the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', usePrettierrc: true }], // Ignore CRLF/LF errors, use .prettierrc file as source
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/no-onchange': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'], // Ignore redundant Next.js Link errors
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  }
};
