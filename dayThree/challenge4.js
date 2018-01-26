let numbers = [2, 3, 4, 5, 6];


let average = arr => {
	let total = 0;
	for (let i = 0; i < arr.length; i += 1) {
		total += arr[i];
	}

	return total / arr.length;


}

let result = average(numbers);

console.log(result);