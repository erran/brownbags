_ = require("lodash");
Vehicle = require("./vehicle");

// A function is a type of object.
module.exports =
   function Car(properties) {
      if(!properties) {
         properties = {};
      }

      var Car = _.extend(new Vehicle(), properties);
      return Car;
   }
