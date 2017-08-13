var path = require('path');
var chalk = require('chalk');
var fs = require('fs');
var less = require('less');
var cleancss = require('less-plugin-clean-css');
var ncp = require('ncp').ncp;
var filesave = require('file-save');

var cleanCSSPlugin = new cleancss({advanced: true});
var stylePath = path.resolve(__dirname, '../src/less');
var styleComponentsPath = path.resolve(__dirname, '../src/less/components');
var libPath = path.resolve(__dirname, '../lib/css');
var fontPath = path.resolve(__dirname, '../src/less/iconfont/fonts');
var fontOutputPath = path.join(libPath, './fonts');


console.log(chalk.cyan.bold('Building for CSS...'));

var files = fs.readdirSync(styleComponentsPath).filter(function (file) {
    // ignore directory & index.less
    return !(fs.statSync(path.join(styleComponentsPath, file)).isDirectory()
        || /(index|empty)\.less$/.test(file));
});

var number = 0;
var startTime = new Date().getTime();

for (var i = 0, length = files.length; i < length; i++) {
    buildFile(files[i]);
}

function buildFile(file) {
    var filePath = path.join(styleComponentsPath, file);
    fs.readFile(filePath, 'utf8', function(err, data) {
        // console.log(data);
        less.render(data, {
            paths: [stylePath, styleComponentsPath],
            plugins: [cleanCSSPlugin]
        }).then(function (output) {
            var outputFileName = file.replace(/less/, 'css');
            var outputPath = path.join(libPath, outputFileName);
            filesave(outputPath).write(output.css);
            var offset = Math.round((new Date().getTime() - startTime));
            var index = ++number;

            console.log(chalk.yellow(`[${index < 10 ? ('0' + index) : index}]  `, addWhiteSpace(`${offset}ms`, 10),
                addWhiteSpace(outputFileName, 25)));
            if (index === files.length) {
                copyFonts();
            }
        })
    })
}

function copyFonts() {
    console.log(chalk.cyan.bold('Copying fonts...\n'));

    // copy fonts
    ncp(fontPath, fontOutputPath, function (err) {
        if (err) {
            console.error('Copy fonts error!');
            console.log(err);
            process.exit(1);
        }
        console.log(chalk.cyan.bold(`Build CSS complete. Total count: ${files.length}\n`));
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
