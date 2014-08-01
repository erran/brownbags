_ = require("lodash");

var MimickedBackboneModel = function MimickedBackboneModel () {};

MimickedBackboneModel.extend = function extend(overrides) {
   return _.extend(new MimickedBackboneModel(), overrides);
}

module.exports = MimickedBackboneModel;
