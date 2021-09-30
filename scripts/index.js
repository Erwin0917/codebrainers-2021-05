import {Character, createHtmlCharacter} from './character.js';
import { getRandomNumberFromRange } from './utilis.js';
import { Weapon } from './weapon.js';

class Hero extends Character {
    constructor(name) {
        super(name);
        this.hitPoints = 150;
        this.strength = 50;
    }
}

class Villain extends Character {
    constructor(name) {
        super(name);
        this.hitPoints = 100;
        this.strength = 40;
    }
}

const weaponNames = ['Scourge', 'Deathbringer', 'Blade of Darkness', 'Soul Eater', 'Bloodbath', 'Scarlet Delirium', 'Perpetual Gloom', 'Nightfall', 'Doomsday', 'Final Reckoning', 'Bleak Eradicator', 'Dread Devourer', 'Hideous Dissector', 'Timeless Twilight', 'Gruesome Carnage', 'Shadow of Death', 'Chaos Conqueror', 'Vicious Catastrophe', 'Frostreaper', 'Foul Mutilator', 'Havocfang', 'Widowmaker', 'Gravedigger', 'Searing Vengeance', 'Grim Despair', 'Ceaseless Torment', 'Executioner', 'Neckchopper', 'Bonesplitter', 'Bane of Existence', 'Viper\'s Bite', 'Eviscerator', 'Merciless Fate', 'Heartsnatcher', 'Worldbreaker\'s Woe', 'Sanguine Thirst', 'Justifier', 'Demented Rampage', 'Great Destroyer', 'Claw of Calamity', 'Decimation', 'Despicable Onslaught', 'Fleshrender', 'Godslayer', 'Shatterskull', 'Crimson Cyclone', 'Blackrazor', 'Unholy Ruin', 'Spirit Crusher', 'Cataclysm', 'Joykiller', 'Facesmasher', 'Baleful Misery', 'Harvester of Sorrow', 'Infernal Rapture', 'Terrorfist', 'Warmonger', 'Decapitator', 'Skinripper', 'Herald of Madness', 'Dire Genocide', 'Eternal Punishment', 'Butcher\'s Blight', 'Immortal Agony', 'Loathsome Harbinger', 'Fatal Void', 'Limb Eliminator', 'Life Drainer', 'Plaguetooth', 'Neverending Dismemberment', 'Undying Cruelty', 'Gutslicer', 'Corpse Tyrant', 'Wounds of Sin', 'Heretic\'s Prophecy', 'Rotpiercer', 'Inevitable Decay', 'Armageddon', 'Hategrinder', 'Withering Sanity']
const weapons = [];

function generateWeapon() {

    const name = weaponNames[getRandomNumberFromRange(0, weaponNames.length - 1)];
    weaponNames.splice(weaponNames.indexOf(name), 1);

    return new Weapon(name, getRandomNumberFromRange(3, 10), getRandomNumberFromRange(40, 60), getRandomNumberFromRange(30, 70));
}

for (let i = 1; i <= 15; i++) {
    weapons.push(generateWeapon());
}


// while (hero.weapon === null) {
//     hero.setWeapon(weapons[getRandomNumberFromRange(0, weapons.length - 1)]);
// }
//
// while (villain.weapon === null) {
//     villain.setWeapon(weapons[getRandomNumberFromRange(0, weapons.length - 1)]);
// }

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

fetch(`https://rickandmortyapi.com/api/character/${getRandomNumberFromRange(1, 670)}`).then(response => response.json()).then(createCharacter);

function createCharacter(data) {
    // const villain = new Villain();
    console.log(data);
    const hero = new Hero(data.name);
    hero.imageSrc = data.image;
    const htmlElement = createHtmlCharacter(hero);
    const heroTeam = document.getElementById('hero-team');
    heroTeam.appendChild(htmlElement);

    console.log(hero);
}





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


