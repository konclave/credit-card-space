import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  format: 'umd',
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify()
  ],
  dest: 'dist/credit-card-space.js',
  moduleName: "CreditCardSpace"
};
