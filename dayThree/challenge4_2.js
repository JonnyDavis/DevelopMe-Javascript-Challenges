let numbers = [2, 3, 4, 5, 6];



let average = arr => {
	return arr.reduce((acc, val) => 
		acc + val, 0) / arr.length;
}

let result = average(numbers);

console.log (result);