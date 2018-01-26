let max = numbers => {
	maxNo = -Infinity;
	for (let i = 0; i < numbers.length; i += 1) {
		if (numbers[i] > maxNo) {
			maxNo = numbers[i];
		}

	}

	return maxNo;
}

let result = max([2, 4, 6, 4, 7, 5]);

console.log(result);