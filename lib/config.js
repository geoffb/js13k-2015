exports.width = 160;
exports.height = 90;

exports.scenes = {
	level: require("./scenes/level")
};

exports.components = {
	transform: require("ocelot/lib/components/transform"),
	sprite: require("ocelot/lib/components/sprite"),
	tilemap: require("ocelot/lib/components/tilemap"),
	light: require("ocelot/lib/components/light"),
	darkness: require("./components/darkness"),
	unit: require("./components/unit"),
	goblin: require("./components/goblin")
};

exports.prefabs = {

	player: {
		unit: {
			x: 0,
			y: 0,
			dx: 0,
			dy: 0,
			hp: 3
		},
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
	},

	goblin: {
		goblin: {},
		unit: {
			x: 10,
			y: 6,
			dx: -1,
			dy: 0,
			hp: 1
		},
		transform: {
			x: 0,
			y: 0,
			sx: 1,
			sy: 1,
			r: 0
		},
		light: {
			radius: 10,
			color: "darkgreen",
			intensity: 1
		},
		sprite: {
			image: "media/images/sprites.png",
			index: 3,
			size: 8
		}
	},

	map: {
		transform: {
			space: "camera",
			x: 0,
			y: 0,
			sx: 1,
			sy: 1,
			r: 0
		},
		tilemap: {
			image: "media/images/sprites.png",
			size: 8,
			map: null
		}
	},

	darkness: {
		transform: {
			space: "camera",
			x: 80,
			y: 45,
			sx: 1,
			sy: 1,
			r: 0
		},
		darkness: {}
	}

};
