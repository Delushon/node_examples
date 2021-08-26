var fs = require("fs")


console.log(fs.readFile("file.txt", "utf8", function(err, data) {
  console.log(data);
}));

console.log("Строка после асинхронного чтения");
