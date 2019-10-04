module.exports = {
  root: true,
  plugins: ['react-native'],
  extends: [
    '@react-native-community',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'react-native/no-raw-text': 'off',
    'import/namespace': 'off',
    'import/named': 'off', // Typescript already checks for unresolved imports
    'import/no-unresolved': 'off', // Typescript already checks for unresolved imports
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
  },
};
