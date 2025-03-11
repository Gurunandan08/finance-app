export default {
    input: 'src/index.js',
    external: ['@rollup/rollup-linux-x64-gnu'],
    output: {
      file: 'bundle.js',
      format: 'cjs'
    },
    plugins: [
      // other plugins
    ]
  };
  
