var path = require('path');
var fs = require('fs');
var ora = require('ora');
var chalk = require('chalk');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.npm.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

// all-in-one config, and build xcui.css

var allInOneConfig = merge(baseWebpackConfig, {
    entry: {
        'xcui': './src/components/index.build.js'
    },
    output: {
        libraryTarget: 'umd'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'xcui.css'
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        })
    ]
})

// umd config, all-in-one

var umdConfig = merge(baseWebpackConfig, {
    entry: {
        'xcui.umd': './src/components/index.umd.js'
    },
    output: {
        libraryTarget: 'umd',
        library: 'xcui'
    }
})


// commonjs config, use externals, npm main js

var cjsConfig = merge(baseWebpackConfig, {
    entry: {
        'xcui.common': './src/components/index.umd.js'
    },
    output: {
        libraryTarget: 'commonjs'
    },
    externals: config.build.externals
})

console.log(chalk.cyan.bold('Building for bundles...'))

webpack(allInOneConfig, function(err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan.bold('Build bundle (all-in-one) & css complete.\n'))
})

webpack(umdConfig, function(err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan.bold('Build umd bundle (all-in-one) complete.\n'))
})


webpack(cjsConfig, function(err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan.bold('Build commonjs bundle (main js, without util externals) complete.\n'))
})
