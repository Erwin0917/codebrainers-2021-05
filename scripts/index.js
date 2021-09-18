const ticket = [2, 1, 3, 4, 5, 6];

let lottoNumbers = [];
let numberDrawn = [];

function populateArray(){
    for(let i = 1; i < 50; i++) {
       lottoNumbers.push(i);
    }
}

function getRandomFromLottoNumber(arr) {
    const number = Math.floor(Math.random() * arr.length) + 1;
    // console.log('getRandomFromLottoNumber', number);
    return number;
}

function pickNumber() {
    const x = getRandomFromLottoNumber(lottoNumbers);
    const index = lottoNumbers.indexOf(x);
    lottoNumbers.splice(index,1);
    return x;
}

function lottery() {
    populateArray();
    // console.log(`Lotto - ${lottoNumbers}`);
    for (let i = 0; i < 6; i++) {
        const numberPicked = pickNumber();
        numberDrawn.push(numberPicked);
        // console.log(`picked ${numberPicked}`);
    }
}

function compareArraysOfNumbers(array1, array2){
    if (array1.length !== array2.length){
        // console.log('wrong array length')
        return false;
    }
    for(let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i]){
            return false;
        }
    }
    return true;

}
function sortArray(itemA, itemB){
    // if (itemA < itemB){
    //     return -1;
    // } else if (itemA > itemB){
    //     return 1;
    // } else{
    //     return 0;
    // }
    return itemA - itemB;
}

function checkTicket(){
    ticket.sort(sortArray);
    numberDrawn.sort(sortArray);
    if (compareArraysOfNumbers(ticket, numberDrawn)){
        return false;
    }
    return true;
}

let numberOfLotteries = 0;
do {
    lottery();
    console.log('lottoNumbers', lottoNumbers);
    console.log('numberDrawn', numberDrawn);
    numberOfLotteries++;
    lottoNumbers = [];
    numberDrawn = [];
    // console.log(checkTicket());
}
while (checkTicket());

alert(`Ticket won in ${numberOfLotteries} draw`);



