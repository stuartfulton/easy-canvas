var EasyImage = (function(window, undefined){
	var _EasyImage = function(width, height, graphicsContext){
        this.width = width;
        this.height = height;
		this.image = graphicsContext.createImageData(width, height);
		this.pixelData = this.image.data;
	}
	_EasyImage.prototype.setPixel = function (x, y, r, g, b, a) {
		var base = ((y * this.width) + x) * 4;
		this.pixelData[base] = r;
		this.pixelData[base + 1] = g;
		this.pixelData[base + 2] = b;
		this.pixelData[base + 3] = a;
	}
	return _EasyImage;
})();

