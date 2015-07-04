var EasyCanvas = (function(window, undefined){
	var _EasyImage = function(canvasId){
		this.canvas = document.getElementById(canvasId);
		this.g = canvas.getContext('2d');
		this.width = canvas.width;
		this.height = canvas.height;
		this.image = graphicsContext.createImageData(width, height);
	}
	
	_EasyImage.prototype.setPixel = function (x, y, Color) {
		var base = ((y * this.width) + x) * 4;
		this.image.data[base] = Color.r;
		this.image.data[base + 1] = Color.g;
		this.image.data[base + 2] = Color.b;
		this.image.data[base + 3] = Color.a;
	};
	
	_EasyImage.prototype.Color = function(r, g, b, a) {
		this.r = r || 0;
		this.g = g || 0;
		this.b = b || 0;
		this.a = a || 255;
	};
	
	_EasyImage.prototype.rect = function(x1, y1, width, height, color){
		var x2 = x1 + width;
		var y2 = y1 + height;
		for (var x = x1; x <= x2; x++){
			for (var y = y1; y <= y2; y++){
				this.setPixel(x, y, color);
			}
		}
	}

	return _EasyImage;
})();

var g, WIDTH, HEIGHT;
var EasyImage = (function(window, undefined){
	var _EasyImage = function(width, height, graphicsContext){
		this.width = width;
		this.height = height;
		this.image = graphicsContext.createImageData(width, height);
	}
	
	_EasyImage.prototype.setPixel = function (x, y, Color) {
		var base = ((y * this.width) + x) * 4;
		this.image.data[base] = Color.r;
		this.image.data[base + 1] = Color.g;
		this.image.data[base + 2] = Color.b;
		this.image.data[base + 3] = Color.a;
	};
	
	_EasyImage.prototype.Color = function(r, g, b, a) {
		this.r = r || 0;
		this.g = g || 0;
		this.b = b || 0;
		this.a = a || 255;
	};
	
	_EasyImage.prototype.rect = function(x1, y1, width, height, color){
		var x2 = x1 + width;
		var y2 = y1 + height;
		for (var x = x1; x <= x2; x++){
			for (var y = y1; y <= y2; y++){
				this.setPixel(x, y, color);
			}
		}
	}
	
	_EasyImage.prototype.draw = function(originX, originY){
		this.g.putImageData(this.image, originX, originY);
	};

	return _EasyImage;
})();

var ezi = new EasyImage('canvas');

ezi.rect(10, 50, 10, 40, new ezi.Color(255, 0, 0));
ezi.rect(0, 70, 80, 10, new ezi.Color(0, 0, 255));
ezi.draw(0, 0);

g.putImageData(ezi.image, 0, 0);
