// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)


// P - A string
// R - Array of vowel positions
// E - See above 
// P - Loop through string and check current index against list of vowels

function vowelIndices(word) {
    let indicies = [];
    for (i = 0; i < word.length; i++) {
        if (
            word[i].toLowerCase() === "a" ||
            word[i].toLowerCase() === "e" ||
            word[i].toLowerCase() === "i" ||
            word[i].toLowerCase() === "o" ||
            (word[i].toLowerCase() === "u") | (word[i].toLowerCase() === "y")
        )
            indicies.push(i + 1);
    }
    return indicies;
}