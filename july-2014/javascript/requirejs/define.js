_ = require('lodash');

module.exports =
   function define(dependencies, classBody) {
      if(!dependencies || !classBody)
      {
         console.log("Usage: define(dependencies, classBody)");
         console.error(arguments);
         throw new Error("Usage: define(dependencies, classBody)");
      }

      if(dependencies.length)
      {
         dependencies = _.map(dependencies, function(dependency) {
            return require(dependency);
         });

         return classBody.apply(this, dependencies);
      }
   }
