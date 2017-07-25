var nodeExternals = require('webpack-node-externals');

var utilExternals = function(context, request, callback) {
    if (/utils\//.test(request)) {
        return callback(null, 'commonjs ' + request);
    }
    callback();
}

var externals = [utilExternals, nodeExternals()];

module.exports = externals;