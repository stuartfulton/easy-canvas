function EasyImage(width, height, graphicsContext) {
	this.image = graphicsContext.createImageData(width, height);
	this.pixelData = this.image.data;
	
	this.setPixel = function (x, y, r, g, b, a) {
		var base = ((y * width) + x) * 4;
		this.pixelData[base] = r;
		this.pixelData[base + 1] = g;
		this.pixelData[base + 2] = b;
		this.pixelData[base + 3] = a;
	}
}
