/** @format */

// Create Server in Node js
// • Why we need server
// • Write code for create server
// • Understand use of request and response params
// • Interview Questions
// • Notes, Code and playlist

const http = require('http');
http
   .createServer((req, res) => {
      res.write('<p>Hello im P tag</p>');
      res.end('Hello ji');
   })
   .listen(9090);



   http
   .createServer((req, res) => {
      res.write('<p>Hello im 2nd Server tag</p>');
      res.end('Hello ji');
   })
   .listen(3000);
