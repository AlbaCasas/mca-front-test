/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (env, argv) => ({
  entry: './src/index.tsx',
  mode: argv.mode,
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, '../dist'),
    port: 8080,
    compress: true
  },
  output: {
    filename: argv.mode === 'production' ? 'bundle.[fullhash].min.js' : 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ].filter(Boolean),
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.tsx', '.ts', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      }
    ]
  },
  optimization: {
    minimize: argv.mode === 'production' ? true : false,
    minimizer: [new TerserPlugin()]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
