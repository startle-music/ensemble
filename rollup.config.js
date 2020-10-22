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
  external: ['react', 'react-dom', 'styled-components'],
  globals: { 'styled-components': 'styled' },
}
