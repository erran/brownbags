_ = require("lodash");

module.exports =
   function Vehicle(properties) {
      // `_.extend()` extends the first object with the properties/functions that
      // were defined for the second object. This style simulates how Backbone models work
      var Vehicle = _.extend({
         color: "black",
         wheels: 4
      }, properties)

      return Vehicle;
   };
