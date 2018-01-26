let monkArr = []

let monkeys = count => {
    for (let i = 0; i < count; i += 1) {
    	monkArr.push("monkey");
    }

    return monkArr;

};

let result = monkeys(4);
console.log("Expected: [ 'monkey', 'monkey', 'monkey', 'monkey' ], Actual: ", result);

result = monkeys(2);
console.log("Expected: [ 'monkey', 'monkey' ], Actual: ", result);
