var canvas = require("ocelot/lib/canvas");
var entities = require("ocelot/lib/entities");

var buffer = canvas.create(1, 1);
var bctx = buffer.getContext("2d");
bctx.imageSmoothingEnabled = false;

exports.render = function (ctx) {
	// TODO: If we pass the camera/viewport to render
	// we won't need width/height on darkness component
	var darkness = this.darkness;
	buffer.width = darkness.width;
	buffer.height = darkness.height;

	bctx.save();
	bctx.globalAlpha = 0.75;
	bctx.fillStyle = "black";
	bctx.fillRect(0, 0, buffer.width, buffer.height);

	bctx.globalCompositeOperation = "destination-out";

	var list = entities.get();
	for (var i = 0; i < list.length; ++i) {
		var entity = list[i];
		var xform = entity.transform;
		var light = entity.light;
		if (!light) { continue; }
		bctx.beginPath();
		bctx.arc(xform.x, xform.y, light.radius, 0, Math.PI * 2);
		bctx.fill();
	}

	bctx.restore();

	ctx.drawImage(
		buffer,
		0, 0, buffer.width, buffer.height,
		-buffer.width / 2, -buffer.height  / 2, buffer.width, buffer.height
	);
};
