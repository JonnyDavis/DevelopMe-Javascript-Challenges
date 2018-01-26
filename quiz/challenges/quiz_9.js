let pigLatin = str => {
    let words = str.split(" "); // returns an Array (multiple things) //

    return words.map(word => {
        let first = word.substring(0, 1).toLowerCase();
        let rest = word.substring(1);

        return rest + first + "ay";
    }).join(" ");
};

let result = pigLatin("The quick brown fox");
console.log("Expected: hetay uickqay rownbay oxfay, Actual: " + result);

result = pigLatin("The secret plans are in the bunker");
console.log("Expected: hetay ecretsay lanspay reaay niay hetay unkerbay, Actual: " + result);

result = pigLatin("How now brown cow"); // true
console.log("Expected: owhay ownay rownbay owcay, Actual: " + result);