let items = [{
    name: "coffee",
    price: 3.50,
}, {
    name: "tea",
    price: 2.50,
}, {
    name: "toblerone",
    price: 3.20,
}, {
    name: "newspaper",
    price: 0.10,
}];



let total = arr => {
	return arr.reduce((acc, item) => acc + item.price, 0);

	
	};

let result = total(items).toFixed(2);

console.log(result);

