let a = { name: "Alice", age: 52 };
let b = { name: "Bob", age: 34 };
let c = { name: "Charlie", age: 24 };
let d = { name: "Bob", age: 97 };

let folks = [a, b, c, d];


let oaps = arr => {
	return arr.filter(obj => obj.age > 65);

}

let result = oaps(folks);

console.log(result);