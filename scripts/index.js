//Math.floor()
//Math.ceil()
//Math.round()
for(let i = 0; i < 4; i++){
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;

    const userResult = parseInt(prompt(`How much is ${firstNumber} * ${secondNumber}`));
    const result = firstNumber * secondNumber;

    console.log('userResult', userResult, typeof userResult);
    console.log('result', result, typeof result);
    console.log(userResult === result);

    if(userResult === result){
        alert('Your answer is correct!');
    }
}
