_ = require("lodash");

module.exports =
function Vehicle (properties) {
   if(!properties) {
      properties = {};
   }

   var Vehicle = _.extend({
      color: "black",
      wheels: 4
   }, properties)

   return Vehicle;
};
