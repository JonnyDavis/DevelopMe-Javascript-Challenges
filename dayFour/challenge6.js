let a = { name: "Alice", age: 52 };
let b = { name: "Bob", age: 34 };
let c = { name: "Charlie", age: 24 };

let people = [a, b, c];
['alice', 'bob', 'charlie']



let names = arr => {
	let nameArr = arr.map(obj => {
		return obj.name;
	});

	return nameArr.join(", ");


};

let result = names(people);

console.log(result);