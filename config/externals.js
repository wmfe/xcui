var nodeExternals = require('webpack-node-externals');

var utilExternals = function(context, request, callback) {
    if (/src\/utils\//.test(request)) {
        var libRequest = request.replace(/src/, 'lib');
        return callback(null, 'commonjs ' + libRequest);
    }
    callback();
}

var externals = [utilExternals, nodeExternals()];

module.exports = externals;