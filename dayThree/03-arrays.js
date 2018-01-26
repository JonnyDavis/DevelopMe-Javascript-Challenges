/*
- Create a function, `squares`, that takes an array of numbers as an argument. Return a new array containing the square of each number.

    1. Try doing it with a `for` loop
    2. Try doing it using `.map()`

    ```javascript
    squares([2, 3, 4, 5, 6]); // [4, 9, 16, 25, 36]
    ```
*/

// with for loop
let squares = values => {
    let output = [];
    
    // square each value and store in output
    for (let i = 0; i < values.length; i += 1) {
        output.push(values[i] * values[i]);
    }

    return output;
};

// with map
let squares = values => values.map(value => value * value);


/*
- Create a function, `odd`, that takes an array of numbers. Return an array containing only the odd numbers.

    1. Try doing it with a `for` loop
    2. Try doing it using `.filter()`

    ```javascript
    odd([2, 3, 4, 5, 6]); // [2, 4, 6]
    ```
*/    

// with a for loop
let odd = values => {
    let output = [];
        
    // add value to output if it's odd
    for (let i = 0; i < values.length; i += 1) {
        if (values[i] % 2 !== 0) {
            output.push(values[i]);
        }
    }

    return output;
};

// with filter
let odd = values => values.filter(value => value % 2 !== 0);


/*
- Create a function, `max`, that takes an array of numbers. Return the largest number.

    1. Try doing it with a `for` loop
    2. Try doing it using `.reduce()`

    ```javascript
    max([2, 3, 4, 5, 6]); // 6 
    ```
*/

// for loop
let max = values => {
    let biggest = values[0];
    
    // if current value is bigger than biggest so far, replace biggest
    for (let i = 0; i < values.length; i += 1) {
        if (values[i] > biggest) {
            biggest = values[i];
        }
    }

    return biggest;
};

// reduce
let max = values => {
    return values.reduce((biggest, current) => {
        if (current > biggest) {
            return current;
        }

        return biggest;
    }, values[0]);
};

/*
- Create a function, `average`, that takes an array of numbers as an argument. Return the average value of all the numbers.

    1. Try doing it with a `for` loop
    2. Try doing it using `.reduce()`

    ```javascript
    average([2, 3, 4, 5, 6]); // 4
    ```
*/

// for loop
let average = values => {
    let sum = 0;
    
    // add up all the values
    for (let i = 0; i < values.length; i += 1) {
        sum += values[i];
    }
    
    // divide by the length
    return sum / values.length;
};

// reduce
let average = values => {
    // add up the values
    let sum = values.reduce((total, current) => total + current, 0);

    // divide by the length
    return sum / values.length;
};


/*
- Create a function, `oddSquares`, that takes an array of numbers as an argument. Return a new array containing the squares of each number, but only if the square is odd.

    1. Try doing it with a `for` loop
    2. Try doing it using `.map()` and `.filter()`

    ```javascript
    oddSquares([2, 3, 4, 5, 6, 7]); // [9, 25, 49]
    ```
*/

// for loop
let oddSquares = values => {
    let output = [];
    let square;
    
    // work out square of each value
    for (let i = 0; i < values.length; i += 1) {
        square = values[i] * values[i];
        
        // only add to output if it's odd
        if (square % 2 !== 0) {
            output.push(square);
        }
    }

    return output;
};

// map and filter
let oddSquares = values => {
    // get all the squares
    let squares = values.map(value => value * value);

    // filter out the even ones
    return squares.filter(square => square % 2 !== 0);
};

/*
- Create a function, `merge`, that takes two arrays as arguments. It should return a new array containing the elements of both arrays.

    1. Try doing it using `.concat()`
    2. Trying doing it *without* using `.concat()`

    ```javascript
    merge([2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12]); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    ```
*/

// with concat
let merge = (first, second) => first.concat(second);

// without concat
let merge = (first, second) => {
    let merged = [];
    
    // add all items in the first array to merged
    for (let i = 0; i < first.length; i += 1) {
        merged.push(first[i]);
    }
    
    // add all items in the second array to merged
    for (let j = 0; j < second.length; j += 1) {
        merged.push(second[i]);
    }

    return merged;
};


/*
- Create a function, `reverse`, that takes an array of strings. Return a new array where each string is reversed.
    
    **Hint**: arrays have a `reverse()` method and you can turn a string into an array of letters using `str.split("")` and turn it back into a string using `arr.join("")`

    ```javascript
    reverse(["fish", "bolton", "green"]); // ["hsif", "notlob", "neerg"]
    ```
*/

let reverse = strings => {
    // go over each string in turn
    return strings.map(string => {
        // split string into array of characters
        // reverse order of array
        // convert array back into string
        return string.split("").reverse().join("");
    });
};

/*
- Create a function, `both`, that takes two arrays. Return a new array containing any value that is in both arrays.

    1. Try doing it with `.indexOf()`
    2. Try doing it *without* `.indexOf()`

    ```javascript
    both([2, 3, 4, 5, 6], [1, 2, 5, 6]); // [2, 5, 6]
    ```
*/

// indexOf
let both = (first, second) => {
    let inBoth = [];
    let current;
    
    // go over each item in first
    for (let i = 0; i < first.length; i += 1) {
        current = first[i];
        
        // if it's in the second array too, add to inBoth
        if (second.indexOf(current) !== -1) {
            inBoth.push(current);
        }
    }

    return inBoth;
};

// without indexOf
let both = (first, second) => {
    let inBoth = [];
    let current;
    
    // go over each item in first
    for (let i = 0; i < first.length; i += 1) {
        current = first[i];
        
        // go over each item in second and check if it matches current first value
        // a loop within a loop: goes over all values of second for every value of first
        for (let j = 0; j < second.length; j += 1) {
            if (current === second[j]) {
                inBoth.push(current);
            }
        }
    }

    return inBoth;
};


/*
- Create a function, `sortNumbers`, that takes an array of numbers. Return an array so that the values are ordered in numerically.

    **Hint**: look at the [documentation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) for the the array `sort()` method

    ```javascript
    sortNumbers([1, 11, 3, 4, 34, 58, 9, 7]); // [1, 3, 4, 7, 9, 11, 34, 58]
    ```
*/

let sortNumbers = values => {
    // sort can take a function
    // if the function returns a negative number a should be before b 
    // if the function returns a positive number b should be before a 
    return values.sort((a, b) => a - b);
};

/*
- Create a function, `palindrome`, that take a string as an argument. Return `true` if the given string is a palindrome (i.e. the same forwards as backwards).

    **Hint**: you turn a string into an array using `str.split("")` and back again using `arr.join("")`

    ```javascript
    palindrome("fish"); // false
    palindrome("madam"); // true
    palindrome("minim"); // true
    ```
*/

let palindrome = string => {
    // split string into characters
    let characters = string.split("");
    
    // while the characters array has more than one character left it it
    while (characters.length > 1) {
        // take off the last and first letters
        // if they don't match it can't be a palindrome
        if (characters.pop() !== characters.shift()) {
            return false;
        }
    }
    
    // if all letters have been checked and matched, must be a palindrome
    return true;
};

/*
- Create a function, `flatten`, that takes an array containing a mix of values and arrays. It should return an array containing all the values from all the arrays. It should cope with arrays containing other arrays to any level.

    **Hint**: you can use `Array.isArray(val)` to check if a value is an array or not... and you might need recursion

    ```javascript
    flatten(["a", "b", ["c", "d"], [["e", "f"], ["g", "h"]]]); // ["a", "b", "c", "d", "e", "f", "g", "h"]
    ```
*/

let flatten = values => {
    return values.reduce((output, value) => {
        // if the value is an array, run flatten on it again and merge with output
        if (Array.isArray(value)) {
            return output.concat(flatten(value));
        }
        
        // otherwise just add to output
        output.push(value)
        return output;
    }, []);
};
