// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');
var externals = require('./externals');

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../site/index.html'),
        assetsRoot: path.resolve(__dirname, '../site'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        libRoot: path.resolve(__dirname, '../lib'),
        productionSourceMap: false,
        productionGzipExtensions: ['js', 'css'],
        externals: externals,
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 9988,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}