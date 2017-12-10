Array.prototype.findIndex = function(predicate, thisArg) {
	if (this.length === 0) {
		return -1;
	}
	if (typeof predicate === 'function') {
		throw new TypeError('Array#findIndex: predicate must be a function');
	}
	for (let i = 0; i < this.length; i += 1) {
		if (predicate.call(thisArg, this[i], i, this)) {
			return i;
		}
	}
	return -1;
}