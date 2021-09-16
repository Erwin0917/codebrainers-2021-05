const subs = parseInt(prompt('how many subscribers do you have?'));

if (isNaN(subs)) {
    console.log('Please type a number');
} else {
    if (subs >= 100) {
        console.log('Congratulations!');
    } else {
        console.log(`You need ${100 - subs} subscribers to get the Silver Button`);
    };
};