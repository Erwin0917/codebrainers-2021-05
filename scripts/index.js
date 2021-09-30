import {Hero, Villain, createHtmlCharacter} from './character.js';
import { getRandomNumberFromRange } from './utilis.js';
import {generateWeapon} from "./weapon.js";

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

let isLoading = false;

async function createCharacter() {
    isLoading = true;
    // const villain = new Villain();
    const characterData = await getDataForCharacter();
    const hero = createCharacterByData(characterData);
    console.log('hero after create', hero)
    const htmlElement = createHtmlCharacter(hero);
    hero.setHtmlElement(htmlElement);
    const heroTeam = document.getElementById('hero-team');
    heroTeam.appendChild(htmlElement);
    isLoading = false;
    console.log(hero);
    //console.log(data);
    // const hero = new Hero(data.name);
    // hero.imageSrc = data.image;
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
    const newWeapon = generateWeapon();
    console.log('newWeapon', newWeapon);
    hero.setWeapon(newWeapon);
    return hero;
}

const addCharacterButton = document.querySelector('#add-character');

addCharacterButton.addEventListener('click', createCharacter);

addCharacterButton.disabled = isLoading;