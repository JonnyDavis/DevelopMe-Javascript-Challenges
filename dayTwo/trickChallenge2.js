/* let skip = (skip, max) => {
	let maxTotal = (max) * (1 + max) / 2; //210
	let divisible = ((max/skip) * ((max/skip) + 1) / 2) * skip;

	return maxTotal - divisible;

};

let result = skip(4, 20);

console.log(result); 
								The maths way.

*/


let skip = (skip, max) => {
	let maxTotal = 0;
	for (let i = 0; i < max; i += 1) {
		maxTotal += i;
		if (i % skip === 0) {
			maxTotal -= i;
		}

	}

	return maxTotal;

	


}

let result = skip(4,20);

console.log(result);

