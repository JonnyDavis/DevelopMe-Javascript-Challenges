let numbers = [-2, -4, -6, -4, -7, -5];

// let max = numbers.reduce((acc, val) => , 0);

// console.log(max);

let max = arr => {
	return arr.reduce((acc, val) => {
		if (val > acc) {
			acc = val;
		}
		return acc;
	} , -Infinity);  // set to first index: arr[0] alternatively//

}

let result = max(numbers);

console.log(result);
 