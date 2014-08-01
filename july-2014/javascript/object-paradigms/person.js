// Vehicle and Car are both Function objects.
Vehicle = require("./vehicle");
Car = require("./car");

defaultCar = new Car();
console.log(defaultCar);

redCorvette = new Car({ color: "red", type: "Corvette" });
console.log(redCorvette);

greenDucatti = new Vehicle({ color: "green", wheels: 2 });
console.log(greenDucatti);

blueTruck = new Vehicle({ color: "blue", wheels: 18 });
console.log(blueTruck);
