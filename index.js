let express = require("express");

let app = express();

app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("index");
});

app.get("/:id", function (request, response) {
  response.send("Id = " + request.params.id);
});

app.get("/news/:id", function (request, response) {
  response.render("news", {newsId: request.params.id});
});

app.listen(3333)
