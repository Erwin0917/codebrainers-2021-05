const ticket = [11, 15, 30, 33, 41, 46];

function populateArray() {
    const newArray = [];
    for (let i = 1; i < 50; i++) {
        newArray.push(i);
    }

    return newArray;
}

function getRandomFrom1UpTo(topRange) {
    return Math.floor(Math.random() * topRange) + 1;
}

function compareArraysOfNumbers(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;

}

function sortArray(itemA, itemB) {
    return itemA - itemB;
}

function pickNumber(lottoNumbers) {
    const pickedNumber = getRandomFrom1UpTo(lottoNumbers.length);
    const indexOfPickedNumber = lottoNumbers.indexOf(pickedNumber);
    lottoNumbers.splice(indexOfPickedNumber, 1);
    return pickedNumber;
}

function lottery() {
    const lottoNumbers = populateArray();
    const numberDrawn = [];

    for (let i = 0; i < 6; i++) {
        const pickedNumber = pickNumber(lottoNumbers);
        numberDrawn.push(pickedNumber);
    }

    return numberDrawn;
}

function checkTicket(numberDrown) {
    ticket.sort(sortArray);
    numberDrown.sort(sortArray);
    if (compareArraysOfNumbers(ticket, numberDrown)) {
        return false;
    }
    return true;
}


let numberOfLotteries = 0;
let jackpot = false;
do {
    const numberDrown = lottery();
    jackpot = checkTicket(numberDrown);
    numberOfLotteries++;

} while (jackpot);

console.log('How many tickets for 6 numbers:', numberOfLotteries);


