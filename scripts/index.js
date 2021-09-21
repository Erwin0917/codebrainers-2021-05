// ## Exercise 04
//
// ### TASK 1
//
// Write a function which takes an array of names as an argument and filters out names longer than 5 characters. Event better: names longer than a given number of characters.
//

const names = ['krystian', 'ala', 'barnaba', 'basia', 'jerzy', 'alicja', 'szymek'];

function namesShorterThanGivenChars(charsLimit) {
    const namesShorterThan = names.filter(name => name.length < charsLimit);
    return namesShorterThan;
    // return names.filter(name => name.length < charsLimit);
};
console.log(namesShorterThanGivenChars(5));

//
//
// ### TASK 2
//
//
// Create a mapping function which calculates the squere of the number of all elements of array, however. if given element of array is no a number, it should filter it out.

const numbersAndNames = [3, 'krystian', 'ala', 2,  'barnaba', 5, 'basia', 10, 'jerzy', 'alicja', 'szymek', null, undefined];

const numbersSquare = numbersAndNames.map(x => x**2);

// function numbersOnly(value) {
//     if (typeof(value) === 'number') {
//         return value;
//     }
// };
//
// const numbers = numbersSquare.filter(numbersOnly);
// console.log(numbers);

const numbersOnly = value => {
    if (typeof(value) === 'number') {
        return value;
    }
}

const numbers = numbersSquare.filter(numbersOnly);
console.log(numbers);