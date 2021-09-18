//Math.floor()
//Math.ceil()
//Math.round()
let score = 0;
let questionCount = 0
do {
    questionCount = parseInt(prompt(`How many questions you want to answer? `));
} while(isNaN(questionCount));

for(let i = 0; i < questionCount; i++){
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;

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
