/**
 * @file webpack.npm.conf.js
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseConfig = require('./webpack.npm.base.conf');
var themeUrl = require('../package.json').theme;
var theme  = require(path.join(__dirname, '../',themeUrl));
var merge = require('webpack-merge');

var SOURCE_MAP = false;

function generateExtractLoaders(loaders) {
    return loaders.map(function (loader) {
        if (loader === 'less') {
            return loader + '-loader?{"modifyVars":'+ JSON.stringify(theme)+'}'
        }
        return loader + '-loader' + (SOURCE_MAP ? '?sourceMap' : '');
    }).join('!');
}

module.exports = merge(baseConfig, {
    entry: {
        'xcui': './src/components/index.js'
    },
    output: {
        filename: '[name].js'
    },
    chunkFilename: '[id].[chunkhash].js',
    devtool: SOURCE_MAP ? 'source-map' : false,
    vue: {
        loaders: {
            js: 'babel',
            css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
            less: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'less']))
        }
    },
    plugins: (baseConfig.plugins || []).concat([
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
    ])
});



