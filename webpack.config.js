const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [{
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
        include: path.resolve(__dirname, 'src', 'main'),
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
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src', 'main'),
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  resolve: {
    extensions: [
      '.js', '.ts', '.jsx', '.tsx'
    ]
  }
},
{
  name: 'renderer',
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: './src/interface/index.ts',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'ui.js'
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src', 'interface'),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.s(c|a)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src', 'interface'),
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'XStore',
      template: path.resolve(__dirname, 'src', 'interface', 'index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 3000
  }
}
]
