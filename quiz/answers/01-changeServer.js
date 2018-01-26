let changeServer = (player1, player2) => {
    // add up the scores
    // and return whether they're divisible by 5 or not
    return (player1 + player2) % 5 === 0;
};

let result = changeServer(5, 0);
console.log("Expected: true, Actual: " + result);

result = changeServer(5, 3);
console.log("Expected: false, Actual: " + result);

result = changeServer(9, 6);
console.log("Expected: true, Actual: " + result);

result = changeServer(17, 8);
console.log("Expected: true, Actual: " + result);

result = changeServer(16, 8);
console.log("Expected: false, Actual: " + result);
