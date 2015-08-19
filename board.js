var entities = require("./ocelot/entities");
var random = require("./ocelot/utils/random");

var size = 8;

var map;
var unitMap;

exports.generate = function () {
	// TODO: Determine size
	// 20x12 tiles is the current screen size
	map = [];
	unitMap = [];
	for (var y = 0; y < 12; ++y) {
		map.push([]);
		unitMap.push([]);
		for (var x = 0; x < 20; ++x) {
			map[y][x] = random.chance(0.8) ? 1 : 0;
			unitMap[y][x] = null;
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
	var unit = entity.unit;
	unitMap[unit.y][unit.x] = null;
	unit.x = x;
	unit.y = y;
	unitMap[y][x] = entity;
};

exports.at = function (x, y) {
	return unitMap[y][x];
};
