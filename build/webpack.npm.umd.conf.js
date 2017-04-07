/**
 * @file webpack.npm.umd.conf.js
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.npm.base.conf');
var themeUrl = require('../package.json').theme;
var theme  = require(path.join(__dirname, '../',themeUrl));


config.entry['xcui.umd'] = './src/components/index.umd.js';
config.output.filename = '[name].js';
config.output.chunkFilename = '[id].[chunkhash].js';
config.output.library = 'xcui';


var SOURCE_MAP = false;

config.devtool = SOURCE_MAP ? 'source-map' : false;

config.vue.loaders = {
    js: 'babel'
};

config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
]);

module.exports = config;

