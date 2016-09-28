#!/usr/bin/env node

'use strict';

var path = process.argv[2];
var args = process.argv.slice(3);

var cp = require('child_process').spawn(path, args, {
    stdio: 'inherit'
});

cp.on('exit', function (code) {
    process.exit(code);
});
