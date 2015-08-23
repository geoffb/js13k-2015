var game = require("ocelot");
var entities = require("ocelot/lib/entities");
var tween = require("ocelot/lib/tween");

var board = require("../board");

var idleDuration = 0;

var player, map, darkness;

var acceptInput = true;

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
		tick();
	}
};

var tick = function () {
	entities.triggerAll("tick", [board]);
	idleDuration = 0;
	acceptInput = false;
	setTimeout(function () {
		acceptInput = true;
	}, 250);
};

exports.start = function () {
	var mapData = board.generate();

	map = entities.spawn("map");
	map.tilemap.map = mapData;

	player = entities.spawn("player");
	game.setCameraFollowTarget(player);

	for (var i = 0; i < 5; ++i) {
		var goblin = entities.spawn("goblin");
		goblin.unit.x = Math.round(Math.random() * 20);
		goblin.unit.y = Math.round(Math.random() * 12);
	}

	darkness = entities.spawn("darkness");
};

exports.update = function (dt, keys) {
	handleInput(keys);

	if (acceptInput) {
		idleDuration += dt;
		if (idleDuration > 1000) {
			tick();
		}
	}
};
