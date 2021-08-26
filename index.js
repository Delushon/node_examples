var events = require("events")
var util = require("util")

var cars = function(model) {
  this.model = model;
}

util.inherits(cars, events.EventEmitter);

var audi = new cars("audi");
var lada = new cars("lada");
var uaz = new cars("uaz");

var carArray = [audi, lada, uaz];
carArray.forEach(function(car) {
  car.on("speed", function(text) {
    console.log(car.model + " speed is " + text);
  });
});

lada.emit("speed", "120 kmh")
uaz.emit("speed", "65 kmh")
