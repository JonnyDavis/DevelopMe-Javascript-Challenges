let minmax = values => {
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < values.length; i += 1) {
        if (values[i] < min) {
            min = values[i];
        }

        if (values[i] > max) {
            max = values[i];
        }
    }

    return min + max;
};

// Or using reduce
let minmax = values => {
    let min = values.reduce((smallest, value) => {
        if (value < smallest) {
            smallest = value;
        }

        return smallest;
    }, values[0]);

    let max = values.reduce((biggest, value) => {
        if (value > biggest) {
            biggest = value;
        }

        return biggest;
    }, values[0]);

    return min + max;
};

let result = minmax([4, 5, 1, 7, 12]); // should work out 1 + 12
console.log("Expected: 13, Actual: " + result);

result = minmax([8, -3, 7, 17, 28]); // should work out -3 + 28
console.log("Expected: 25, Actual: " + result);

result = minmax([-8, -3, -7, -17, -28]); // should work out -3 + -28
console.log("Expected: -31, Actual: " + result);

result = minmax([4]); // should work out 4 + 4 
console.log("Expected: 8, Actual: " + result);
