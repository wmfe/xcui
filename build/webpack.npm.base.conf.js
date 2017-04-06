/**
 * @file webpack.npm.base.conf.js
 */

var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var themeUrl = require('../package.json').theme;
var theme  = require(path.join(__dirname, '../',themeUrl));

module.exports = {
    entry: {
        'xcui': './src/components/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: 'xcui.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'vue$': 'vue/dist/vue.js'
        }
    },
    stats: {
        children: false
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel!eslint',
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader!less-loader")
        },{
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.less\.components\.less$/,
            loader: ExtractTextPlugin.extract(
                'style-loader!'+
                'css-loader!less-loader?{"modifyVars":'+ JSON.stringify(theme)+'}')
        }, {
            test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash:7]'
            }
        }]
    },
    vue: {
        loaders: {
            js: 'babel!eslint'
        }
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    }
};
