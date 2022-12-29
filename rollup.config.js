import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**' // only transpile our source code
    }),
    terser()
  ],
  output: {
    file: 'dist/credit-card-space.js',
    format: 'umd',
    name: 'CreditCardSpace'
  },
};
