var tween = require("../ocelot/tween");
var effects = require("../ocelot/utils/effects");

exports.tick = function (board) {
	var unit = this.unit;
	if (unit.dx !== 0 || unit.dy !== 0) {
		var nx = unit.x + unit.dx;
		var ny = unit.y + unit.dy;

		if (board.wall(nx, ny)) {
			// TODO: Play negate sound?
			effects.negate(this);
		} else {
			// TODO: check for other units and attack
			unit.x = nx;
			unit.y = ny;

			tween.create(this.transform, board.mapToWorld(nx, ny), 250);
			effects.pulse(this);
		}

		// Reset the intended movement in all scenarios
		unit.dx = 0;
		unit.dy = 0;
	}
};
