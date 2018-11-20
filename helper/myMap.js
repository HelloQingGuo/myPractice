Array.prototype.myMap = function(callback) {
	var res = [];
	if (typeof callback === 'function') {
		for (var i = 0; i < this.length; i++) {
			res[i] = callback(this[i], i, this);
		}
	}
	return res;
}