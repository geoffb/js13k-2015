var game = require("./ocelot/game");
var assets = require("./ocelot/assets");
var color = require("./ocelot/utils/color");

// Define color palette
color.define({
	black: [20, 12, 28],
	white: [222, 238, 214],
	yellow: [218, 212, 94],
	orange: [210, 125, 44]
});

assets.load([
	"media/images/sprites.png"
]);

game.init(require("./config"));

game.loadScene("level");
game.start();
