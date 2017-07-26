var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var config = require('../config');
var babelCore = require('babel-core');
var fileSave = require('file-save');

console.log(chalk.cyan.bold('building for utils...'))

var utilPath = path.resolve(__dirname, '../src/utils');

var files = read(utilPath);
var names = files.map(function(entry) {
    return path.basename(entry, '.js');
})

for (var i = 0, length = files.length; i < length; i++) {
    buildFile(files[i], names[i]);
}


// read dir recursively, and return paths
function read(dir) {
    return fs.readdirSync(dir).reduce(function(files, file) {
        return fs.statSync(path.join(dir, file)).isDirectory() ?
            files.concat(read(path.join(dir, file))) :
            files.concat(path.join(dir, file));
    }, []);
}

function buildFile(file, name) {
    babelCore.transformFile(file, {
        plugins: [
            'add-module-exports', ['transform-es2015-modules-umd', {
                loose: true
            }],
        ],
        moduleId: name
    }, function(err, result) {
        if (err) {
            throw err;
        }
        var outputPath = file.replace(/src/, 'lib')
        fileSave(outputPath).write(result.code);
    })
}