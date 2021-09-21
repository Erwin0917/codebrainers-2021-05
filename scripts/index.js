
const names = ['krystian', 'ala', 'barnaba', 'basia', 'jerzy', 'alicja', 'szymek'];

function namesShorterThanGivenChars(callback) {
    // const namesShorterThan = names.filter(name => {
    //     return name.length < charsLimit;
    // });
    if (..) {
        callback();
    }
    return namesShorterThan;
    // return names.filter(name => name.length < charsLimit);
};


namesShorterThanGivenChars();
const charFn = (numberOfChar => item => item.length > numberOfChar)(5);

const charFn2 = numberOfChar => (item, index) => item.length > numberOfChar;

const callFn = charFn2(5);
// console.log(typeof  callFn);
const nameLongerThan5 = names.filter(callFn);

console.log(nameLongerThan5);

const numbersOnly = value => typeof value === 'number' ? 'to jest number' : 'to nie jest number';

const numbersAndNames = [3, 'krystian', 'ala', 2,  'barnaba', 5, 'basia', 10, 'jerzy', 'alicja', 'szymek', null, undefined];

const arrayOfNumbers = numbersAndNames.filter(function (value, index) {
    return numbersOnly(value);
});

const numbersSquare = arrayOfNumbers.map( item => item * item );

// console.log(numbersSquare);
