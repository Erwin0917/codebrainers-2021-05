const lottoNumbers = [];
const numberDrawn = [];

function populateArray(){
    for(let i = 1; i < 50; i++) {
       lottoNumbers.push(i);
    }
}

function getRandomFromLottoNumber(arr) {
    const number = Math.floor(Math.random() * arr.length) + 1;
    return number;
}

function generateRandomNumberFromArray(array){
    return array[getRandomFromLottoNumber(array)]
}
function pickNumber() {
    const x = generateRandomNumberFromArray(lottoNumbers);
    const index = lottoNumbers.indexOf(x);
    lottoNumbers.splice(index,1);
    return x;
}

populateArray();
for( let i = 0; i < 6; i++){
    numberDrawn.push(pickNumber());
}

console.log('lottoNumbers', lottoNumbers);
console.log('numberDrawn', numberDrawn);

