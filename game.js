var engine = require("./ocelot/engine");
var entities = require("./ocelot/entities");
var assets = require("./ocelot/assets");
var tween = require("./ocelot/tween");

assets.load([
	"media/images/tiles.png"
]);

var map = [];
for (var y = 0; y < 10; ++y) {
	map.push([]);
	for (var x = 0; x < 10; ++x) {
		map[y][x] = Math.random() > 0.5 ? 1 : 0;
	}
}

engine.init(320, 240);

entities.definePrefab("map", {
	transform: {
		x: 10,
		y: 10,
		sx: 1,
		sy: 1,
		r: 0
	},
	tilemap: {
		image: "media/images/tiles.png",
		size: 8,
		map: map
	}
});

entities.definePrefab("thing1", {
	transform: {
		x: 100,
		y: 100,
		sx: 1,
		sy: 1,
		r: 0
	},

	// body: {
	// 	vx: 0,
	// 	vy: 0,
	// 	g: 1
	// },
	// sprite: {
	// 	alpha: 1,
	// 	path: "hero.png"
	// },
	shape: {
		type: "rect",
		fill: "red",
		stroke: "darkred",
		lineWidth: 4,
		width: 40,
		height: 80
	},
	// text: {
	// 	text: "Hello World",
	// 	fill: "black",
	// 	font: "Arial",
	// 	size: 12
	// }
});

var map = entities.spawn("map");

tween.create(map.transform, {
	x: 200,
	y: 100
}, 1000);

// entities.spawn("thing1");

engine.start();
