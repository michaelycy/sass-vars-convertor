'use strict';

const path = require('path');
const { promises: fs } = require('fs');

const typingsSrc = path.resolve(__dirname, 'src', 'index.d.ts');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'cjs/index.js',
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
    },
    {
      file: 'esm/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    (() => {
      return {
        name: 'package-type',
        async writeBundle(output) {
          let prefix, type;

          if (output.file.includes('cjs/')) {
            prefix = 'cjs';
            type = 'commonjs';
          } else if (output.file.includes('esm/')) {
            prefix = 'esm';
            type = 'module';
          }

          if (typeof prefix !== 'undefined') {
            const package_ = path.join(prefix, 'package.json');
            const typings = path.join(prefix, 'index.d.ts');
            try {
              await fs.unlink(package_);
            } catch (error) {}

            await fs.writeFile(package_, JSON.stringify({ type }), 'utf8');

            await fs.copyFile(typingsSrc, typings);
          }
        },
      };
    })(),
  ],
};
