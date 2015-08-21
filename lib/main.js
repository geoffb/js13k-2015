var game = require("ocelot");
var assets = require("ocelot/lib/assets");
var color = require("ocelot/lib/utils/color");

// Define color palette
color.define({
	black: [20, 12, 28],
	white: [222, 238, 214],
	yellow: [218, 212, 94],
	orange: [210, 125, 44],
	red: [255, 0, 0],
	darkgreen: [52, 101, 36]
});

assets.load([
	"media/images/sprites.png"
]);

game.init(require("./config"));

game.loadScene("level");
game.start();
