const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  externals: [
    'react',
    'react-dom',
    'lodash',
    'prop-types',
    'styled-components',
    'styled-tools',
    'framer-motion',
    '@idui/react-avatar',
    '@idui/react-badge',
    '@idui/react-collapse',
    '@idui/react-date-components',
    '@idui/react-file-input',
    '@idui/react-icon',
    '@idui/react-inputs',
    '@idui/react-mask-input',
    '@idui/react-modal',
    '@idui/react-pagination',
    '@idui/react-popover',
    '@idui/react-progress',
    '@idui/react-sheet',
    '@idui/react-snackbar',
    '@idui/react-stepper',
    '@idui/react-text-area',
    '@idui/react-toggle-controls',
    '@idui/react-tree',
    '@idui/react-tree-select',
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./src/'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    mainFields: ['browser', 'module', 'main'],
  },
};
