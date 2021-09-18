const lottoNumbers = [];

function populateArray(){
    for(let i = 1; i < 50; i++)
        lottoNumbers.push(i);
}


function generateRandomNumberFromArray(array){
    return array[Math.floor(Math.random() * array.length)]
}
function pickNumber() {
    const x = generateRandomNumberFromArray(lottoNumbers);
    const index = lottoNumbers.indexOf(x);
    lottoNumbers.splice(index,1);
    return x;
}

populateArray();
for( let i = 0; i < 6; i++){
    console.log(pickNumber());
}

