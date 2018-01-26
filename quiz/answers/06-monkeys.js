let monkeys = count => {
    let result = []; // create an empty array
    
    // run this count times
    for (let i = 0; i < count; i += 1) {
        // push "monkey" into the array
        result.push("monkey");
    }

    return result;
};

let result = monkeys(4);
console.log("Expected: [ 'monkey', 'monkey', 'monkey', 'monkey' ], Actual: ", result);

result = monkeys(2);
console.log("Expected: [ 'monkey', 'monkey' ], Actual: ", result);
