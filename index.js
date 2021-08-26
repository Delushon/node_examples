var fs = require("fs");

var myReader = fs.createReadStream(__dirname + "/BigTextFile.txt")

myReader.on("data", function(chunk) {
  console.log("NEW DATA:\n" + chunk);
})
