function all(promises) {
	return new Promise((resolve, reject) => {
		let responses = [];
		let amountPendingPromise = promises.length;
		promises.forEach((p, idx) => {
			if (p instanceof Promise) {
				console.log(idx);
				p.then(response => {
					responses[idx] = response;
					amountPendingPromise--;
					if (amountPendingPromise === 0) {
						resolve(responses);
					}
				}, error => reject(error));
			} else {
				responses[idx] = p;
				amountPendingPromise--;
				if (amountPendingPromise === 0) {
					resolve(responses);
				}
			}
		});
	});
}

var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

// expected output: Array [3, 42, "foo"]
all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
