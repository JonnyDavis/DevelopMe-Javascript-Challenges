
let titleCase = str => {
	let splitStr = str.toLowerCase().split(" ");
	return splitStr.map(str => {
		return str.charAt(0).toUpperCase() + str.substr(1);
		
	})
	.join(" ");
	
};


let result = titleCase("hello, my name is Jim");

console.log(result);