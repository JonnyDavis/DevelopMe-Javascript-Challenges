Javascript / Programming notes

console.log - prints out on screen

* = multiply
% = modulus (remainder) - divides two numbers and produces the remainder

Scientific numbers - i.e. 1e9 (1 billion)

Anything / 0 = Infinity, avoid any calculations involving infinity

Be consistent either using '' or "".
Can use double quotation marks within single quotation marks to give an output with "".

use + operator to join strings - called concatenation. 

Add a + before a value that might not be a number. 
Often necessary when you get values from the browser (e.g. an inuts value will come back as a string.)

The + operator has multiple meanings, unlike the other operators (joins strings and adds numbers).



.Variables.

Variables are a way of storing a value using a name so that we can refer to it later.

Declared using 'let' command i.e. let someVariableName.

A value is assigned to a variable using the = symbol.

Its good practice to declare a variable and assign its value in one line. You can also assign more than one variable at once with a coma.

Can also use const and var to declare variables. 
const - Constant, value cant be changed.
var - Common in older JS. Identical to let except when it comes to 'scoping'. Stick to let unless dealing with legacy code.

Name a variable something that represents its purpose. (VERY IMPORTANT). Makes code easier to follow.



Computers use boolean logic: true or false.


Logic Rules

and (&&) - if either value is false, equates to false and vice versa.
i.e. (10 > 12) && (1 < 2); //false.

or (||) - if either value is true, the result is true and vice versa.
i.e. (10 === 12) || (2 !== 1) //true.

not (!) = reverses the truth value: turns true to false and false to true.
Two !! values reverses twice, so effectively stays the same.
i.e. !(10 > 12); //true.


// - comments
/* - multi line comments


.Conditionals.

If statements decide what our program will do.
In a basic if statement, the code inside the block will only run if the statement is true:

let x = 13;
let max = 10;

if (x >= max) {
    console.log("Woo!"); //this will run
} else {
    console.log("No Woo!")
}

else - Either the top or bottom block of code will run.
else if - extends the if statement with multiple blocks of code.



Ternary Operator

If the blocks of your conditional are very short you can use the ternary operator.

let x = 10;

let y = x > 5 ? 7 : 10; // y is set to 7

the condition (before ?)
the if true result (before the :)
the if false result (after the :)


.Loops.

Use a loop when we want to do something similar more than once.

For Loops

Useful for known amounts. Three parts:

1. let i = 0: setup a variable that we use as a counter.
2. i < 10: keep running the loop as long as it is true (up to less than 10)
3. i += 1: increment (increase) by 1 every time the loop runs.

for (let i = 0; i < 10; i += 1) {
    console.log(i);
}


While Loops

keep doing something until the condition is false:

let count = 0;
let total = 0;

// will keep running until total is no more than 100
while (total <- 100) {
    total += count;
    count += 1;
}

console.log(total); // 105

Lets you have loops where the condition is not the counter (as with for loops)


Beware of infinite loops - code that never finishes. 



.:Answers:.

Fizzbuzz
- Produce 1 - 50
- divisible by 3 = Fizz
- divisible by 5 = Buzz
- divisible by 3 & 5 = FizzBuzz

for (let i = 1; i <= 50; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
         console.log(i);
    }
}

Alternative:

for (let = 1; i <= 50; i += 1) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz";
    }

    if (i % 5 === 0) {
        output += "Buzz";
    }

    if (output === "") {       // (output === "" ? i : output); //
        console.log(i);
    } else {
        console.log(output);
    }
}




