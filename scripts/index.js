import {Hero, Villain, createHtmlCharacter} from './character.js';
import { getRandomNumberFromRange } from './utilis.js';
import {generateWeapon} from "./weapon.js";
import {UiFactory} from "./uiFactory.js";

const uiPanel = new UiFactory();

window.onload = async function() {
    const defaultName = await getDataForCharacter();
    uiPanel.nameField.value = defaultName.name;
    uiPanel.weaponField.value = generateWeapon().name;
    uiPanel.strengthField.value = getRandomNumberFromRange(30, 60);
    uiPanel.hitpointsField.value = getRandomNumberFromRange(100, 150);
}


const characters = [];
const heroes = [];
const villains = [];

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

async function createCharacterByInputData() {
    const createdCharacterData = await getDataForCharacter();

    const createdCharacter = createCharacterByUserData(createdCharacterData);
    const htmlCreatedCharacterElement = createHtmlCharacter(createdCharacter);
    // createdCharacter.setHtmlElement(htmlCreatedCharacterElement);

    console.log(createdCharacter);

if (document.getElementById('add-character').clicked = true) {

    // if (pickTeam.value === '') {
    //     const pickTeamError = document.querySelector('#select-team-error');
    //     pickTeamError.style.display = 'block';
    // }

    const fieldCorrect = uiPanel.validField(uiPanel.pickTeam, uiPanel.pickTeamError);

    if (fieldCorrect && uiPanel.pickTeam.value === 'teamHero' && heroes.length === 5) {
        alert('Team Hero is full, delete a character or pick another team')
    } else if (fieldCorrect && uiPanel.pickTeam.value === 'teamVillain' && villains.length === 5) {
        alert('Team Villain is full, delete a character or pick another team')
    }

    if (heroes.length === 5) {
        document.querySelector('#teamHero').setAttribute('disabled', '');
        uiPanel.pickTeam.value = 'teamVillain';
    } else if (villains.length === 5) {
        document.querySelector('#teamVillain').setAttribute('disabled', '');
        uiPanel.pickTeam.value = 'teamHero';
    }

    if (uiPanel.nameField.value === '') {
        uiPanel.nameError.style.display = 'block';
    } else if (uiPanel.nameField.value.length < 3) {
    uiPanel.nameTooShortError.style.display = 'block';
    }

    if (uiPanel.weaponField.value === '') {
        uiPanel.weaponError.style.display = 'block';
    } else if (uiPanel.weaponField.value.length < 3) {
        uiPanel.weaponNameTooShortError.style.display = 'block';
    }

    if (characters.some(e => e.name === uiPanel.nameField.value)) {
        uiPanel.takenNameError.style.display = 'block';
    }

    else {

        if (uiPanel.pickTeam.value !== '' && uiPanel.nameField.value !== '' && uiPanel.weaponField.value !== '' && uiPanel.nameField.value.length > 3 && uiPanel.weaponField.value.length > 3) {

            if (uiPanel.pickTeam.value === 'teamHero' && heroes.length < 5) {
                const heroTeam = document.getElementById('hero-team');
                heroTeam.appendChild(htmlCreatedCharacterElement);
                createdCharacter.id = `hero${characters.length}`;
                heroes.push(createdCharacter);
                characters.push(createdCharacter);

                // deleteOption();

                uiPanel.clearErrorMessages();

                await uiPanel.refreshInputFields();
            }

            if (uiPanel.pickTeam.value === 'teamVillain' && villains.length < 5) {
                const villainTeam = document.getElementById('villain-team');
                villainTeam.appendChild(htmlCreatedCharacterElement);
                createdCharacter.id = `villain${characters.length}`;
                villains.push(createdCharacter);
                characters.push(createdCharacter);

                // deleteOption();

                uiPanel.clearErrorMessages();

                await uiPanel.refreshInputFields();
        }
        }
    }
    }
};


export async function getDataForCharacter() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${getRandomNumberFromRange(1, 670)}`);
    return response.json();
}

function createCharacterByUserData(data) {
    const createdCharacter = new Hero();
    createdCharacter.setType(data.type);
    createdCharacter.setImage(data.image);
    console.log(createdCharacter);

    createdCharacter.setName(uiPanel.nameField.value);
    const newWeapon = generateWeapon();
    createdCharacter.setWeapon(newWeapon);
    newWeapon.name = uiPanel.weaponField.value;
    createdCharacter.setHitPoints(uiPanel.hitpointsField.value);
    createdCharacter.setStrength(uiPanel.strengthField.value);

    return createdCharacter;
}

async function createCharacterByRandomData(data){

    clearErrorMessages();

    // const createdCharacter = new Hero();
    // createdCharacter.setType(data.type);
    // createdCharacter.setImage(data.image);

    const randomName = await getDataForCharacter();
    uiPanel.nameField.value = randomName.name;

    const randomWeapon = generateWeapon()
    uiPanel.weaponField.value = randomWeapon.name;
    console.log(randomWeapon);

    uiPanel.strengthField.value = getRandomNumberFromRange(30, 60);

    uiPanel.hitpointsField.value = getRandomNumberFromRange(100, 150);

    await uiPanel.refreshInputFields();

}

async function randomizeName() {
    const randomName = await getDataForCharacter();
    uiPanel.nameField.value = randomName.name;
}

async function randomizeWeapon() {
    const randomWeapon = generateWeapon()
    uiPanel.weaponField.value = randomWeapon.name;
}

async function randomizeStrength() {
    uiPanel.strengthField.value = getRandomNumberFromRange(30, 60);
}

async function randomizeHitpoints() {
    uiPanel.hitpointsField.value = getRandomNumberFromRange(100, 150);
}

// function deleteCharacter() {
//     let OnEvent = (document) => {
//     return {
//         on: (event, className, callback) => {
//             document.addEventListener('click', (event)=>{
//                 if(!event.target.classList.contains(className)) return;
//                 callback.call(event.target, event);
//             }, false);
//         }
//     }
// };
//
// OnEvent(document).on('click', 'delete-char', function (e) {
//     console.log(this.id.slice('7'));
// });
// }
//
// function deleteOption() {
//     const deleteChar = document.querySelector('#delete-char');
//     deleteChar.id = `delete-char${characters.length-1}`;
//     console.log(deleteChar);
//
//     deleteChar.addEventListener('click', deleteCharacter);
// }

const addCharacterButton = document.querySelector('#add-character');
addCharacterButton.addEventListener('click', createCharacterByInputData);

const randomCharacterButton = document.querySelector('#random-character');
randomCharacterButton.addEventListener('click', createCharacterByRandomData);

const randomName = document.querySelector('#random-name');
randomName.addEventListener('click', randomizeName);

const randomWeapon = document.querySelector('#random-weapon');
randomWeapon.addEventListener('click', randomizeWeapon);

const randomStrength = document.querySelector('#random-strength');
randomStrength.addEventListener('click', randomizeStrength);

const randomHitpoints = document.querySelector('#random-hitpoints');
randomHitpoints.addEventListener('click', randomizeHitpoints);

// 1. don't change weapon attributes if random and then add (or add, error, add) (generate weapon attributes at random or at add?)
// 2. if shown, no name errors disappear after you input a name of min. 3 chars
// 3. randomize team option
// 5. min/max num of characters for weapon and name, randomize names max 15 char
// 6. delete char from team
// 7. reqstrength for weapon cant be higher than char strength (or generate again)
// 8. 85/86 character.js, isLoading?, starting data for strength and hitpoints
