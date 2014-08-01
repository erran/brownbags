define = require('./define'); // This simulates using the RequireJS define method

module.exports = // ControlsInsight uses RequireJS so module exports are implicit
   define(['./mimickedBackboneModel', 'lodash'], function(MimickedBackboneModel, _) {
      var ExampleModel = MimickedBackboneModel.extend({
         url: '/api/threats'
      });

      return ExampleModel;
   });
