Array.prototype.myMap = function(callback) {
	var i = 0;
	var res = [];
	var len = this.length;
	if (typeof callback === 'function') {
		for (; i < len; i++) {
			res[i] = callback(this[i], i, this);
		}
	}
	return res;
}