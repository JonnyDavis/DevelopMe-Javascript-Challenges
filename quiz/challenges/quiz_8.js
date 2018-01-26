let longest = words => {
    return words.reduce((acc, str) => {
    	if (str.length > acc.length) {
    		acc = str;
    	} 
    	return str;
    } ,words[0])

};

let result = longest(["cow", "wombat", "aardvark"]);
console.log("Expected: aardvark, Actual: " + result);

result = longest(["fish", "fishiest", "fishier"]);
console.log("Expected: fishiest, Actual: " + result);