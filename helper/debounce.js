// https://css-tricks.com/debouncing-throttling-explained-examples/

function debounce(func, wait = 0) {
	let timeout;
	return function(e) {
		// for react only:  e.persist();
		const context = this, args = arguments;
		const later = function() {
			// 其实就是把外层函数的this, 正确的反映在内层的call back里，
			// 因为我们返回给caller的是外层的那个匿名函数，caller那块可能就会bind this, 但是实际上
			// caller是想绑定的是他之前传进来的call back, 但是由于timeout会改变this，所以我们把this存到了context里面
			// 再传进去，利用closure保持了外层函数的this
			// and also we shouldn't directly use arguments will refer to the closet function parameter list
			func.apply(context, args);
		};
		clearTimeout(timeout);
		// cb will be executed asyncly, in react, event object will be nullied
		// so we need to call e.persist()
		timeout = setTimeout(later, wait);
	};
}

/*
immediate: if it is true, we will invoke the func immediately
if there is no pending timer (task), and reset the timer
(clearTimeout, setTimeout), but we will check immediate and then will
not execute the func when time is out.

we will not invoke the func if there is a pending timer, and reset
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
}

function debounce (func, wait = 0, immediate = false) {
	let timeout;
	return immediate ?
		function() {
      		const context = this, args = arguments;
			if (!timeout) {
				// no timer means no pending task
				// just invoke func
   			    // execute immediately
				func.apply(context, args);
			} else {
				// there is pending timer, clear the prev timer
				clearTimeout(timeout);
			}
			timeout = setTimeout(() => timeout = null, wait);
		} :
		function(e) {
    	    // used for react: e.persist();
			const context = this, args = arguments;
			const later = function() {
				func.apply(context, args);
			};
			clearTimeout(timeout);
    		// execute asyncly
			timeout = setTimeout(later, wait);
		};
}