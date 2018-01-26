
let numbers = [2, 3, 4, 5, 6, 7];


let oddSquares = arr => {
	
	let sqArr = arr.map(val => val * val);
	return sqArr.filter(val => val % 2 !== 0);


// can right functions as variables above (square) //
	
	


}

let result = oddSquares(numbers);
console.log(result);