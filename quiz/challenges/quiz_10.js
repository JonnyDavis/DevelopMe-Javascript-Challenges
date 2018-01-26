let comparePeople = (a, b) => {
    if (a.name === b.name || a.value === b.value) {
    	return true;
    } else {
    	return false;
    }
};

let first = {
    name: "age",
    value: 36,
};

let second = {
    name: "cars",
    value: 56,
};

let third = {
    name: "age",
    value: 56,
};

let result = comparePeople(first, second);
console.log("Expected: false, Actual: " + result);

result = comparePeople(first, third);
console.log("Expected: true, Actual: " + result);

result = comparePeople(second, third); // true
console.log("Expected: true, Actual: " + result);