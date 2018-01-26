let factorOf = (a, b) => {
	if (b % a === 0) {
		return true
	} else {
		return false
	}
};

let result = factorOf (3, 16);

console.log(result);