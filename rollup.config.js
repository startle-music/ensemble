import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json'


export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    nodeResolve(), 
    babel({
        babelHelpers: 'runtime',
        plugins: [
            [
                '@babel/plugin-transform-runtime', 
                { 
                    useESModules: false
                }]
        ]
    }),
    commonjs() 
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
    /@babel\/runtime/
  ]

}
