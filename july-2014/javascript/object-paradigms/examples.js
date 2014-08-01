// Vehicle and Car are both Function objects.
Car = require("./car");
Person = require('./person')
Vehicle = require("./vehicle");

////////
// Example usages:
////////
john = new Person("John", "Doe");
console.log("person: ", john);

defaultCar = new Car();
console.log("default car:", defaultCar);

redCorvette = new Car({ color: "red", owner: john, type: "Corvette" });
console.log("red corvette: ", redCorvette);

greenDucatti = new Vehicle({ color: "green", wheels: 2 });
console.log("green ducatti: ", greenDucatti);

blueTruck = new Vehicle({ color: "blue", wheels: 18 });
console.log("blue truck:", blueTruck);
