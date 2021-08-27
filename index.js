let express = require("express");
let bodyParser = require('body-parser')

let app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});


app.use("/public", express.static("public"));

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

app.post('/news/:id', urlencodedParser, function (req, res) {
    console.log(req.body)
})

app.listen(3333)
