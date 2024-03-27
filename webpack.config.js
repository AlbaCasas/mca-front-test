/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: './src/index.tsx',
  mode: mode,
  output: {
    filename: mode === 'production' ? 'bundle.[fullhash].min.js' : 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    mode === 'production' ? new MiniCssExtractPlugin() : null
  ].filter(Boolean),
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use:
          mode === 'production'
            ? [MiniCssExtractPlugin.loader, 'css-loader']
            : ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      }
    ]
  },
  optimization: {
    minimizer: mode === 'production' ? [new TerserPlugin(), new CssMinimizerPlugin()] : []
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
