var fs = require("fs");

var myReader = fs.createReadStream(__dirname + "/BigTextFile.txt")
var myWriter = fs.createWriteStream(__dirname + "/NewBigTextFile.txt")

myReader.pipe(myWriter)
