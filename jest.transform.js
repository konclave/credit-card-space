var fs = require('fs');
var babelConfig = JSON.parse(fs.readFileSync('./.babelrc', "utf8"));
babelConfig.presets[0][1].modules = 'commonjs';
module.exports = require('babel-jest').createTransformer(babelConfig);