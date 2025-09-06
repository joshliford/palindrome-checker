// Palindrome Checker

/*
Write and test two functions:
    1. Create a helper function that accepts a string and returns 
    the string in reverse.
    2. Your primary function should accept an array of strings. 
    For each word in the array, you should print something like, 
    "The word 'tacocat' is a palindrome!" 
        or 
    "The word 'dated' is NOT a palindrome."
    Make use of your first function. 
*/

function reverseString(string) {
    return string.split('').reverse().join("");
}

function palindromeChecker(stringArr) {
    for (let word of stringArr) {
        if (word === reverseString(word)) {
            console.log(`The word ${word} is a palindrome!`);
        } else {
            console.log(`The word ${word} is NOT a palindrome!`);
        }
    }
}

let testArray = ["moon", "mom", "tacocat", "adobo", "agog", "kayak", "bikini", "banana", "level", "garage", "deified", "angora", "radar", "rotator"];

palindromeChecker(testArray);