var tween = require("../ocelot/tween");
var effects = require("../ocelot/utils/effects");

exports.tick = function (board) {
	var unit = this.unit;
	if (unit.hp < 1) { return; }
	if (unit.dx !== 0 || unit.dy !== 0) {
		var nx = unit.x + unit.dx;
		var ny = unit.y + unit.dy;

		if (board.wall(nx, ny)) {
			// TODO: Play negate sound?
			effects.negate(this);
		} else {
			var entity = board.at(nx, ny);
			if (entity) {
				// Attack
				entity.unit.hp--;
				if (entity.unit.hp < 1) {
					delete entity["light"];
					entity.transform.r = Math.PI / 2;
				}
				effects.negate(this); // TODO: Attack polish
			} else {
				// Move
				board.move(this, nx, ny);
				tween.create(this.transform, board.mapToWorld(nx, ny), 250);
				effects.pulse(this);
			}
		}

		// Reset the intended movement in all scenarios
		unit.dx = 0;
		unit.dy = 0;
	}
};
