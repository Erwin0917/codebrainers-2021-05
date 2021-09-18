//Math.floor()
//Math.ceil()
//Math.round()

function getRandomNumberFrom1To10() {
    return Math.floor(Math.random() * 10) + 1;
}

function getNumberOfQuestions() {
    const result = prompt(`How many questions you want to answer? `);
    console.log(parseInt(result))
    return result;
}

function cancelAction(value) {
    return value === null;
}

function isNumberOfQuestionsCorrect(value) {
    return isNaN(value) || value < 1;
}

let score = 0;
let questionCount = 0
do {
    questionCount = getNumberOfQuestions();
    if(cancelAction(questionCount)) {
        break;
    }
} while(isNumberOfQuestionsCorrect(questionCount));

for(let i = 0; i < questionCount; i++){
    const firstNumber = getRandomNumberFrom1To10();
    const secondNumber = getRandomNumberFrom1To10();

    const userResult = parseInt(prompt(`How much is ${firstNumber} * ${secondNumber}`));
    const result = firstNumber * secondNumber;

    console.log('userResult', userResult, typeof userResult);
    console.log('result', result, typeof result);
    console.log(userResult === result);

    if(userResult === result){
        score++;
    }
}
alert(`Your answered correctly ${score}`);
