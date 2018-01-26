

let numbers = [2, 3, 4, 5, 6];

// let squares = numbers.map(val => val * val);

// console.log(squares);


let squares = arr => {
	return arr.map(val => val * val);
}

let result = squares(numbers);

console.log(result);