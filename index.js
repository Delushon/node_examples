var events = require("events")

var observer = new events.EventEmitter();

observer.on("some_event", function(text) {
  console.log(text);
});

observer.emit("some_event", "EXAMPLE TEXT FOR OBSERVER")
