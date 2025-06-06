/** @format */

// Core Modules & Global Object in Node

// • What are modules and type.

// • What are core modules

// • What are global objects

// • Interview Questions

// • Notes, Code and playlist

const fs = require('fs');
const os = require('os');
const { log, warn } = require('console');

fs.writeFileSync('sample.txt', 'Hello im sample');

// console.log(os.cpus());
console.log('Platfrom => ', os.platform());
console.log('Hostname => ', os.hostname());

console.log('CWD => ', process.cwd());
console.log('PID => ', process.pid);

log('log');
warn('warn');
