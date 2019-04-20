// 下面这个方法是有问题的，它把结果存到了函数的一个prop中，所以在最后执行的时候，要清零， 防止下次invoke的时候按照之前的结果计算
// 但是，我们只能在最后执行的时候，清零，如果，caller 先call了一次全部带着参数的，因此 sum 没有清零
// 等下次再执行的时候，就把上次的结果带进来了
// E.G.
add(1)(2); // function, with sum prop = 3;
add(1)(2)(); // 6
function add(num) {
	if (add.sum === undefined) {
		add.sum = 0;
	}
	if (num !== undefined) {
		add.sum += num;
		return add;
	} else {
		const tmp = add.sum;
		add.sum = 0;
		return tmp;
	}
}


// 这个方法每次都会重新传入一个[0],所以不会出现leftover的情况

add(1)(2); // function， with temparay value [3]
add(1)(2)(); // 3


add(5)(0); // f
add(5)(0)(); // 5

function add(num) {	
	return _add(num, 0);
}

function _add(num, sum) {
	if (num === undefined) {
		// return value right now
		return sum;
	}
	sum += num;
	return function(num2) {
		return _add(num2, sum);
	};
}	
