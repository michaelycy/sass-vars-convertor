module.exports = {
  extends: ['airbnb/base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 1,
  },

  overrides: [
    {
      files: ['example/**'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
