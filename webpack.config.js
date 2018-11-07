const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/scripts/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, "./dist"),
      watchContentBase: true
    }
};
