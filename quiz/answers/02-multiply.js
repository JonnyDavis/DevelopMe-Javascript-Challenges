let multiply = (x, y) => {
    let result = 0;
    
    // can't use multiplication, so use a loop
    // add the number as many times as we need to
    for (let i = 0; i < y; i += 1) {
        result += x;
    }

    return result;
};

let result = multiply(5, 0);
console.log("Expected: 0, Actual: " + result);

result = multiply(5, 3);
console.log("Expected: 15, Actual: " + result);

result = multiply(9, 6);
console.log("Expected: 54, Actual: " + result);

result = multiply(17, 8);
console.log("Expected: 136, Actual: " + result);

result = multiply(16, 8);
console.log("Expected: 128, Actual: " + result);
