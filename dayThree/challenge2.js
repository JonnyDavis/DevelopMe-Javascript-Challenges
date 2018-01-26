
let oddArr = []

let odd = numbers => {
	for (let i = 0; i < numbers.length; i += 1) {
		if (numbers[i] % 2 === 1) {
			oddArr.push(numbers[i]);
		}

		
	}

	return oddArr;
}


let result = odd([1, 2, 3, 4, 5, 6]);

console.log(result);