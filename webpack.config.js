const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Step 2: Import html-webpack-plugin

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    frontend: './js/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/[name].bundle.js',
  },

  module: {
    rules: [
      // Existing rules
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //     },
      //   },
      // },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../fonts',
              outputPath: 'fonts',
            },
          },
        ],
      },
      {
       // test: /\.(png|jpe?g|gif|svg)$/,
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       outputPath: 'img',
        //       publicPath: '../img',
        //     },
        //   },
        // ],
      },
      {
        test: /\.html$/, // Step 3: Add a new rule for .html files
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true, // Enable minification
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Existing plugins
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index-source.html'), // Correct path to your source HTML file in the root directory
      filename: path.resolve(__dirname, 'index.html'), // Specify the output path relative to the `output.path` directory
      minify: true, // Ensure the output is minified
    }),
  ],

  mode: 'development',
};