const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));
const common = {
  //common
  entry: ['./frontend/index'],
  module: {
    rules: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()]
};
if (isDevServer) {
  //dev
  module.exports = merge(common, {
    devtool: 'cheap-eval-source-map',
    devServer: {
      contentBase: './public',
      hot: true,
      inline: true,
      port: 3000,
      proxy: {
        '/**': {
          target: 'http://localhost:8080',
          secure: false
        }
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  });
} else {
  //production
  module.exports = merge(common, {
    entry: ['babel-polyfill'],
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    ]
  });
}
