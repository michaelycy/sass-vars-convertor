module.exports = {
  '*.js': ['eslint --fix'],
  '*.md': ['prettier --ignore-path .gitignore --write'],
  '.!(npm)*rc': ['prettier --ignore-path .gitignore --parser json --write'],
};
