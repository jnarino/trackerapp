const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
//const ip = 192.168.210.59;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
 // console.log(ip); // => 8.8.8.8
  const publicIp = require('public-ip');
  publicIp.v4().then(ip => {
        console.log(ip);
        //=> '46.5.21.123'
  var geoip = require('geoip-lite');
 // var ip = "200.24.0.20";
  var geo = geoip.lookup(ip);
  console.log(geo);

});

 
  //var geoip = require('geoip-lite');
  //var ip = "200.24.0.20";
  //var geo = geoip.lookup(ip);
  //console.log(geo);

});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
