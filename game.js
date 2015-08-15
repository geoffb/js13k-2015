var engine = require("./ocelot/engine");
var entities = require("./ocelot/entities");
var assets = require("./ocelot/assets");
var tween = require("./ocelot/tween");
var color = require("./ocelot/utils/color");

var darkness = require("./components/darkness");

color.define({
	black: [20, 12, 28],
	white: [222, 238, 214],
	yellow: [218, 212, 94],
	orange: [210, 125, 44]
});

assets.load([
	"media/images/sprites.png"
]);

var map = [];
for (var y = 0; y < 10; ++y) {
	map.push([]);
	for (var x = 0; x < 10; ++x) {
		map[y][x] = Math.random() > 0.5 ? 1 : 0;
	}
}

engine.init(160, 90);

entities.defineComponent("darkness", darkness);

entities.definePrefab("map", {
	transform: {
		x: 0,
		y: 0,
		sx: 1,
		sy: 1,
		r: 0
	},
	tilemap: {
		image: "media/images/sprites.png",
		size: 8,
		map: map
	}
});

entities.definePrefab("player", {
	transform: {
		x: 20,
		y: 20,
		sx: 1,
		sy: 1,
		r: 0
	},
	light: {
		radius: 16,
		color: "orange",
		intensity: 1
	},
	sprite: {
		image: "media/images/sprites.png",
		index: 2,
		size: 8
	}
});

entities.definePrefab("darkness", {
	transform: {
		x: 80,
		y: 45,
		sx: 1,
		sy: 1,
		r: 0
	},
	darkness: {
		width: 160,
		height: 90
	}
});

var map = entities.spawn("map");
var player = entities.spawn("player");
var darkness = entities.spawn("darkness");

// tween.create(player.transform, {
// 	x: 150,
// 	y: 80
// }, 2000);

// entities.spawn("thing1");

engine.start();
