var hi = "hi"
console.log(hi)

var http =require('http');

http.createServer(function (req, res) {
  res.end('hi there');
}).listen(9615);

