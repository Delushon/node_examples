var fs = require("fs")

var text = "NEW FILE TEXT"
fs.writeFileSync("new_file.txt", text);
