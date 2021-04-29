const fs = require('fs');
const path = require('path');
const sassVarsConvertor = require('../cjs/index');

const varFilepath = path.resolve(__dirname, './vars.scss');

const text = fs.readFileSync(varFilepath, 'utf-8');

sassVarsConvertor(text, { camelize: true }).then(res => console.log(res));
