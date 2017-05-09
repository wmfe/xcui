/**
 * @file webpack.npm.umd.conf.js
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseConfig = require('./webpack.npm.base.conf');
var themeUrl = require('../package.json').theme;
var theme  = require(path.join(__dirname, '../',themeUrl));
var merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    entry: {
        'xcui.umd': './src/components/index.umd.js'
    },
    output: {
        filename: '[name].js',
        library: 'xcui',
        chunkFilename : '[id].[chunkhash].js'
    },
    devtool: false,
    vue: {
        loaders: {
            js: 'babel'
        }
    },
    plugins: (baseConfig.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
});

