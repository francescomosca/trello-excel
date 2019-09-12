const path = require('path');
var MakeDirWebpackPlugin = require('make-dir-webpack-plugin');

// @ts-ignore
const isProduction = process.env.NODE_ENV && process.env.NODE_ENV === 'production';

module.exports = {
  target: "node",
  entry: path.join(__dirname, '/src/index.ts'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
  // devtool: !!!isProduction ?'inline-source-map' : undefined,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: "/node_modules/",
        options: {
          compilerOptions: {
            "sourceMap": !!!isProduction,
          }
        }
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new MakeDirWebpackPlugin({
      dirs: [
        { path: './dist/input-folder' },
        { path: './dist/output-folder' }
      ]
    })
  ]
};