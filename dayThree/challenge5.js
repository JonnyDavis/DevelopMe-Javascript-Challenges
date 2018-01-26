

let numbers = [2, 3, 4, 5, 6, 7];
let oddSqArr = [];

let oddSquares = arr => {
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] % 2 === 1) {
			oddSqArr.push(numbers[i] * numbers[i]);
		}

	}

	return oddSqArr;
}

let result = oddSquares(numbers);

console.log(result);