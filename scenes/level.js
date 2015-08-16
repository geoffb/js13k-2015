var entities = require("../ocelot/entities");
var tween = require("../ocelot/tween");

var board = require("../board");

var tickDuration = 500;
var nextTick = 0;

var player, map, darkness;

var tileSize = 8;

var playerX = 0;
var playerY = 0;

var acceptInput = true;

var setPlayer = function (x, y) {
	playerX = x;
	playerY = y;
	player.transform.x = playerX * tileSize + tileSize / 2;
	player.transform.y = playerY * tileSize + tileSize / 2;
};

var movePlayer = function (x, y) {
	playerX = x;
	playerY = y;
	tween.create(player.transform, {
		x: playerX * tileSize + tileSize / 2,
		y: playerY * tileSize + tileSize / 2
	}, 250);
	tween.create(player.transform, {
		sx: 1.25,
		sy: 1.25
	}, 125);
	tween.create(player.transform, {
		sx: 1,
		sy: 1
	}, 125, 125);
};

var handleInput = function (keys) {
	if (!acceptInput) { return; }

	var x = 0;
	var y = 0;
	if (keys[37]) {
		x--;
	}
	if (keys[39]) {
		x++;
	}
	if (keys[38]) {
		y--;
	}
	if (keys[40]) {
		y++;
	}

	if (x !== 0 || y !== 0) {
		player.unit.dx = x;
		player.unit.dy = y;
	}

	// nextTick = 0;
};

exports.start = function () {
	var mapData = board.generate();

	map = entities.spawn("map");
	map.tilemap.map = mapData;

	player = entities.spawn("player");
	entities.spawn("goblin");



	darkness = entities.spawn("darkness");

	setPlayer(0, 0);

	nextTick = tickDuration;
};

exports.update = function (dt, keys) {
	handleInput(keys);

	nextTick -= dt;
	if (nextTick <= 0) {
		entities.triggerAll("tick", [board]);
		nextTick += tickDuration;
		// acceptInput = false;
		// setTimeout(function () {
		// 	acceptInput = true;
		// }, 250);
	}
};
