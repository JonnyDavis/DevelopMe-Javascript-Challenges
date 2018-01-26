
let numbers = [1, 2, 3, 4, 5, 6];

// let odd = numbers.filter(val => val % 2 === 1);

// console.log(odd)


let odd = arr => {
	return arr.filter(val => val % 2 === 1);
}

let result = odd(numbers);

console.log(result);