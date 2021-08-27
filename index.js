var http = require("http");

var server = http.createServer(function(request, response) {
  console.log("URL " + request.url);
  response.writeHead(200, {"Content-Type" : "application/json; charset=utf-8"});

  response.end(request.url);
});

server.listen(3333, "127.0.0.1");
console.log("LISTEN PORT 3333");
