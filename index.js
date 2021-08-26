var fs = require("fs")


fs.unlink("file.txt", function() {
  console.log("Файл удален");
});
