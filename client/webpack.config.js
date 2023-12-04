const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Configuring HtmlWebpackPlugin to inject bundled scripts into our HTML
      new HtmlWebpackPlugin({
        template: './index.html', // Path to your source index.html
        title: 'Editor',
      }),


  // Injects our custom service worker
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),


      // Generates a manifest.json for our PWA
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'DevDraft Editor',
        short_name: 'DevDraft',
        description: 'An offline editor for DevDraft',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [
        // Rule for CSS files
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'], // Use these loaders for CSS files
        },
        // Rule for JavaScript files
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'], // Babel presets
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],

            },
          },
        },
      ],
    },
  };
};

