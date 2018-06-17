function debounce(func, wait = 0) {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			func.apply(context, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

/*
immediate: if it is true, we will revoke the func immediately
if there is no pending timer (task), and reset the timer
(clearTimeout, setTimeout), but we will check immediate and then will
not execute the func when time is out.

we will not revoke the func if there is a pending timer, and reset
the timer (clearTimeout, setTimeout)

*/
function debounce(func, wait = 0, immediate = false) {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};