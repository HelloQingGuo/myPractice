function shallowEqual(p1, p2) {
	return p1 === p2;
}

function memo(func, areEqual = shallowEqual) {
	let oldProps, rendered;
	return funciton(newProps) {
		if (!areEqual(oldProps, newProps)) {
			rendered = func(newProps);
			oldProps = newProps;
		}
		return rendered;
	}
}

