var entities = require("../ocelot/entities");
var tween = require("../ocelot/tween");

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
};

exports.start = function () {
	map = entities.spawn("map");
	player = entities.spawn("player");
	darkness = entities.spawn("darkness");

	setPlayer(0, 0);
};

exports.update = function (dt, keys) {
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
		movePlayer(playerX + x, playerY + y);
		acceptInput = false;
		setTimeout(function () {
			acceptInput = true;
		}, 250);
	}

};
