var express = require("express");

var app = express();

app.get("/", function (request, response) {
  response.send("This is home");
});

app.get("/:id", function (request, response) {
  response.send("Id = " + request.params.id);
});

app.listen(3333)
