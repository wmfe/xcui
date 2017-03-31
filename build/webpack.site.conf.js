/**
 * @file webpack.base.conf.js
 */

var config = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

config.plugins = (config.plugins || []).concat([
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    }),
    new FaviconsWebpackPlugin({
        logo: 'src/assets/favicon.png',
        icons: {
              android: false,
              appleIcon: false,
              appleStartup: false,
              coast: false,
              favicons: true,
              firefox: false,
              opengraph: false,
              twitter: false,
              yandex: false,
              windows: false
            }
    })
]);

module.exports = config;


