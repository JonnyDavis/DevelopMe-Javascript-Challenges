let minmax = values => {
    let max = values.reduce((acc, val) => {
    	if (val > acc) {
    		acc = val;
    	}
    	return acc;
    } , values[0]);
    
    let min = values.reduce((acc, val) => {
    	if (val < acc) {
    		acc = val;
    	}
    	return acc;
    } , values[0]);


    return max + min;

}

let result = minmax([4, 5, 1, 7, 12]); // should work out 1 + 12
console.log("Expected: 13, Actual: " + result);

result = minmax([8, -3, 7, 17, 28]); // should work out -3 + 28
console.log("Expected: 25, Actual: " + result);

result = minmax([-8, -3, -7, -17, -28]); // should work out -3 + -28
console.log("Expected: -31, Actual: " + result);

result = minmax([4]); // should work out 4 + 4 
console.log("Expected: 8, Actual: " + result);