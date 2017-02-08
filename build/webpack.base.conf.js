/**
 * @file webpack.base.conf.js
 */

var path = require('path');
var projectRoot = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../site/static'),
        publicPath: '/',
        filename: '[name].js'
    },
    stats: {
        children: false
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'vue$': 'vue/dist/vue.js'
        }
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'vue-html'
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
            md: 'vue-template-compiler-loader!xcui-demo',
            js: 'babel!eslint'
        }
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    }
};