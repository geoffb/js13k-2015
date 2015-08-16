var tween = require("../ocelot/tween");

exports.tick = function (board) {
	var unit = this.unit;
	if (unit.dx !== 0 || unit.dy !== 0) {
		// Check destination
		// if empty, move there
		// else deal damage to existing unit

		unit.x += unit.dx;
		unit.y += unit.dy;

		unit.dx = 0;
		unit.dy = 0;

		tween.create(this.transform, board.mapToWorld(unit.x, unit.y), 250);
		tween.create(this.transform, {
			sx: 1.25,
			sy: 1.25
		}, 125);
		tween.create(this.transform, {
			sx: 1,
			sy: 1
		}, 125, 125);
		}
};
