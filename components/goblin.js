var random = require("../ocelot/utils/random");

exports.tick = function (board) {
	this.unit.dx = random.chance(0.5) ? -1 : 1;
};
