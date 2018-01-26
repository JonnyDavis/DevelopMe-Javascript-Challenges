let max3 = (a, b, c) => {
    // check if a is biggest
    if (a > b && a > c) {
        return a;
    }
    
    // check if b is biggest
    if (b > a && b > c) {
        return b;
    }
    
    // must be c if the others haven't returned
    return c;
};

let result = max3(1, 2, 3);
console.log("Expected: 3, Actual: " + result);

result = max3(3, 1, 2);
console.log("Expected: 3, Actual: " + result);

result = max3(2, 3, 1);
console.log("Expected: 3, Actual: " + result);

result = max3(7, -7, 14);
console.log("Expected: 14, Actual: " + result);

result = max3(-128, 128, 0);
console.log("Expected: 128, Actual: " + result);
