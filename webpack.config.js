const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resources = require('./resources.json')

module.exports = [{
  name: 'renderer',
  mode: process.env.NODE_ENV,
  target: 'electron-renderer',
  entry: './src/main/index.ts',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'ui.js'
  },
  module: {
    rules: [
      {
        test: /\.(tj)s(x)$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.s(cs)ss$/,
        use: 'sass-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: resources.title,
      template: path.resolve(__dirname, 'src', 'interface', 'index.html'),
      filename: 'index.html'
    })
  ]
}, {
  name: 'main',
  mode: process.env.NODE_ENV,
  target: 'electron-main',
  entry: './src/main/index.ts',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'main.js'
  },
  node: {
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          configFile: path.resolve(process.cwd(), 'main.tsconfig.json')
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js', '.ts', '.jsx', '.tsx'
    ]
  }
}, {
  name: 'preload',
  mode: process.env.NODE_ENV,
  optimization: {
    minimize: true
  },
  entry: {
    index: './src/main/preload.ts'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [path.resolve(__dirname, './node_modules')]
      }
    ]
  },
  target: 'electron-main',
  externals: ['fs-extra', 'electron', 'path'],
  output: {
    filename: 'preload.js',
    path: path.resolve(__dirname, 'bin'),
    libraryTarget: 'umd'
  }
}
]
