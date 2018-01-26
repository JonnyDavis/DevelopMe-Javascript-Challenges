
let squared = []

let squares = numbers => {
	for (let i = 0; i < numbers.length; i += 1) {
		squared.push(numbers[i]*numbers[i]);
	}

	return squared;
}

let result = squares([2, 3, 4, 5, 6]);

console.log(result);
















// let squares = arr => {
// 	return [];	
// }

// let result = squares([1, 2, 3, 4]);
// console.log(result);