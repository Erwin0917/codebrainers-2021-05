import {Hero, Villain, createHtmlCharacter} from './character.js';
import { getRandomNumberFromRange } from './utilis.js';










function attack(attacker, target, attackerName, targetName) {
    if (attacker.isAlive()) {
        console.log(attackerName, ' attacks: ');
        attacker.attack(target, 2);
        console.log(`${targetName} after ${attackerName}'attack ${target.hitPoints}`);
        if (!target.isAlive()) {
            console.log(targetName, 'is dead');
        }
    }
}

function duel(attacker, target, attackerName, targetName) {
    attack(attacker, target, attackerName, targetName);
    attack(target, attacker, targetName, attackerName);
}

// while (hero.isAlive() && villain.isAlive()) {
//     duel(hero, villain, 'Hero', 'Villain');
// }

async function createCharacter() {
    // const villain = new Villain();
    const characterData = await getDataForCharacter();
    const hero = createCharacterByData(characterData);
    console.log(hero);
    //console.log(data);
    // const hero = new Hero(data.name);
    // hero.imageSrc = data.image;
    // const htmlElement = createHtmlCharacter(hero);
    // const heroTeam = document.getElementById('hero-team');
    // heroTeam.appendChild(htmlElement);
    //
    // console.log(hero);
}
async function getDataForCharacter(){
    const response = await fetch(`https://rickandmortyapi.com/api/character/${getRandomNumberFromRange(1, 670)}`);
    return response.json();
}

function createCharacterByData(data){
    console.log(data);
    const hero = new Hero();
    hero.setName(data.name);
    hero.setType(data.type);
    hero.setImage(data.image);
    return hero;
}

createCharacter();


//
//
// const myPromise = new Promise((resolve, reject) => {
//
//
//   setTimeout(() => {
//     resolve('Inside Promise');
//   }, 3000);
//
//   reject()
//
// });
//
//
//
// async function any(value) {
//     const response = await Fetch.api
//
//
// }
//
// const time1 = setTimeout(any, 1000);
//
// const time = setInterval(any, 1000);
//
// clearInterval(time);
//
// clearTimeout(time1);
//
//
// myPromise.then( value => {
//     console.log(value);
//     return value + 2
// }).then(any).catch()
//
// console.log('After Promise');


