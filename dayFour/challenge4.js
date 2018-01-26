let a = { name: "Alice", age: 52 };
let b = { name: "Bob", age: 34 };
let c = { name: "Charlie", age: 24 };
let d = { name: "Bob", age: 97 };

let sameName = (a, b) => {
	if (a.name === b.name) {
		return true;
	} else {
		return false;
	}


};

// let sameName = (a, b) => a.name === b.name; <- efficient answer

let result = sameName(b, d);

console.log(result);


