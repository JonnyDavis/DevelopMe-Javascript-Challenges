// let prime = (n) => {
// 	if (n === 1) {
// 		return false;
// 	} else if {
// 		for (let i = 2; i < n; i += 1) {
// 			if (n % i === 0) {
// 				return false;
// 			}
// 		}

// 		} else {
// 			return true;
// 		}

		
// };



// let result = prime(5);

// console.log(result);

let factorOf =  (a, b) => b % a === 0;


let prime = n => {
	if (n === 1) {
		return false;
	}

	for (let i = 2; i <= Math.sqrt(n); i += 1 ) {
		if (factorOf(i, n)) {
			return false;
		}


	}

	return true;





};


console.log(
	prime(2),
	prime(7),
	prime(997),
	"|",
	prime(1),
	prime(12),
	prime(16),
	prime(24),
);