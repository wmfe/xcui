const version = require('../package.json').version;
const author = require('../package.json').author;
const url = require('../package.json').repository.url;

var banner =
    ' xcui v' + version + '\n' +
    ' (c) 2016-' + new Date().getFullYear() + ', ' + author + ' \n' +
    ' ' + url + '\n' +
    ' Released under the MIT License.\n';

module.exports = banner;