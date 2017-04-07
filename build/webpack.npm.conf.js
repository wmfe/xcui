/**
 * @file webpack.npm.conf.js
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.npm.base.conf');
var themeUrl = require('../package.json').theme;
var theme  = require(path.join(__dirname, '../',themeUrl));
// naming output files with hashes for better caching.
// dist/index.html will be auto-generated with correct URLs.
config.entry['xcui'] = './src/components/index.js';
config.output.filename = '[name].js';
config.output.chunkFilename = '[id].[chunkhash].js';

// whether to generate source map for production files.
// disabling this can speed up the build.
var SOURCE_MAP = false;

config.devtool = SOURCE_MAP ? 'source-map' : false;

config.vue.loaders = {
    js: 'babel',
    css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
    less: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'less'])),
    sass: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'sass'])),
    stylus: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'stylus']))
};

config.plugins = (config.plugins || []).concat([
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('xcui.css')
]);

module.exports = config;

function generateExtractLoaders(loaders) {
    return loaders.map(function (loader) {
        if (loader === 'less') {
            return loader + '-loader?{"modifyVars":'+ JSON.stringify(theme)+'}'
        }
        return loader + '-loader' + (SOURCE_MAP ? '?sourceMap' : '');
    }).join('!');
}
