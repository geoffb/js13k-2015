var random = require("./ocelot/utils/random");
// generate the level
// hold level state
// keep track of things in level
// return info about board to pieces

var size = 8;

var map;

exports.generate = function () {
	// TODO: Determine size
	// 20x12 tiles is the current screen size
	map = [];
	for (var y = 0; y < 12; ++y) {
		map.push([]);
		for (var x = 0; x < 20; ++x) {
			map[y][x] = random.chance(0.8) ? 1 : 0;
		}
	}

	// Spawn the pieces! or w/e

	return map;
};

exports.mapToWorld = function (x, y) {
	return {
		x: Math.round(x * size + size / 2),
		y: Math.round(y * size + size / 2)
	};
};

exports.wall = function (x, y) {
	return (
		x < 0 || y < 0 ||
		y >= map.length ||
		x >= map[y].length ||
		map[y][x] === 0
	);
};

exports.move = function (entity, x, y) {

};
