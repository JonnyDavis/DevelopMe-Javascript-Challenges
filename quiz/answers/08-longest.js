let longest = words => {
    let longest = "";

    for (let i = 0; i < words.length; i += 1) {
        let currentWord = words[i];

        if (currentWord.length > longest.length) {
            longest = currentWord;
        }
    }

    return longest;
};

let result = longest(["cow", "wombat", "aardvark"]);
console.log("Expected: aardvark, Actual: " + result);

result = longest(["fish", "fishiest", "fishier"]);
console.log("Expected: fishiest, Actual: " + result);
