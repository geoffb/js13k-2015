var canvas = require("../ocelot/canvas");
var entities = require("../ocelot/entities");
var assets = require("../ocelot/assets");

var buffer = canvas.create(1, 1);
var bctx = buffer.getContext("2d");

exports.render = function (ctx) {
	// TODO: If we pass the camera/viewport to render
	// we won't need width/height on darkness component
	var darkness = this.darkness;
	buffer.width = darkness.width;
	buffer.height = darkness.height;

	bctx.globalAlpha = 0.75;
	bctx.fillStyle = "black";
	bctx.fillRect(0, 0, buffer.width, buffer.height);

	var image = assets.get("media/images/sprites.png");
	var index = 3;
	var size = 8;
	var width = Math.floor(image.width / size);
	var sx = index % width;
	var sy = Math.floor(index / width);
	var scaleSize = size * 3;

	bctx.globalCompositeOperation = "destination-out";

	var list = entities.get();
	for (var i = 0; i < list.length; ++i) {
		var entity = list[i];
		var xform = entity.transform;
		var light = entity.light;
		if (!light) { continue; }

		bctx.drawImage(
			image,
			sx * size, sy * size, size, size,
			xform.x - scaleSize / 2, xform.y - scaleSize / 2, scaleSize, scaleSize
		);
	}

	ctx.drawImage(
		buffer,
		0, 0, buffer.width, buffer.height,
		-buffer.width / 2, -buffer.height  / 2, buffer.width, buffer.height
	);
};
