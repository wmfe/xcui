var version = require('../package.json').version;
var author = require('../package.json').author;
var url = require('../package.json').repository.url;
var currentYear = new Date().getFullYear();
var banner = ['xcui v' + version];
banner.push('(c) 2016-' + currentYear + ', ' + author);
banner.push(url);
banner.push('Released under the MIT License.');
var ret = banner.join('\n');

module.exports = ret;
