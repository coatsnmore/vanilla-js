//http://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
//node server.js
const connect = require('connect');
const serveStatic = require('serve-static');
let port = 8999;
console.log(`listening at port: ${port}`);
connect().use(serveStatic(__dirname)).listen(port);