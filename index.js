var http = require("http");

var server = http.createServer(function(request, response) {
  console.log("URL " + request.url);
  response.writeHead(200, {"Content-Type" : "application/json; charset=utf-8"});
  var obj = {
    type: "type1",
    text: "text example"
  };
  response.end(JSON.stringify(obj));
});

server.listen(3333, "127.0.0.1");
console.log("LISTEN PORT 3333");
