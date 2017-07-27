var path = require('path');
var fs = require('fs');
var ora = require('ora');
var chalk = require('chalk');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.npm.base.conf');

var env = config.build.env;

console.log(chalk.cyan.bold('Building components...'));

var componentsConfig = merge(baseWebpackConfig, {
    entry: {},
    output: {
        path: config.build.libRoot
    },
    externals: config.build.externals,
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        // webpack 3 scope hoisting
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]
});


var componentsPath = path.resolve(__dirname, '../src/components');
var number = 0;

fs.readdir(componentsPath, function(err, files) {
    if (err) {
        throw err;
    }
    files.filter(function(file) {
        return fs.statSync(path.join(componentsPath, file)).isDirectory();
    }).forEach(function(file) {
        buildComponents(file);
    })
})

function buildComponents(name) {
    setTimeout(function() {
        buildComponent(name);
    })
}

function buildComponent(name) {
    var file = `../src/components/${name}/index`;
    componentsConfig.entry = {};
    componentsConfig.entry[name] = [path.resolve(__dirname, file)];
    componentsConfig.output.libraryTarget = 'umd';
    componentsConfig.output.filename = '[name].js';
    var startTime = new Date().getTime();
    webpack(componentsConfig, function(err, stats) {
        var jsonStats = stats.toJson()
        var assets = jsonStats.assets[0]
        var offset = Math.round((new Date().getTime() - startTime) / 1000)
        var index = ++number
        console.log(chalk.yellow(`[${index < 10 ? ('0' + index) : index}]  `, addWhiteSpace(`${offset}s`, 10),
            addWhiteSpace('umd ' + name, 25), `${(name, assets.size / 1024).toFixed(2)}k`));
        if (err) {
            throw err
        }
    })
}

function addWhiteSpace(str, number) {
    if (str.length < number) {
        var rs = str;
        for (var i = 0; i < number - str.length; i++) {
            rs += ' ';
        }
        return rs;
    }
    return str;
}