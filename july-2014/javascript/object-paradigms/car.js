Vehicle = require("./vehicle");
_ = require("lodash");

// A function is a type of object.
module.exports =
function Car (properties) {
   if(!properties) {
      properties = {};
   }

   var Car = _.extend(new Vehicle(), properties);
   return Car;
}
