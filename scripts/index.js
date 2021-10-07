import {Hero, Villain, createHtmlCharacter} from './character.js';
import { getRandomNumberFromRange } from './utilis.js';
import {generateWeapon} from "./weapon.js";
import {UiFactory} from "./uiFactory.js";
import {GameBoard} from "./gameBoard.js";




async function runGame() {
    const gameBoard = new GameBoard();
    const uiPanel = new UiFactory(gameBoard);

    await uiPanel.randomCharacterData()
    uiPanel.fillInputsByRandomData();

    document.getElementById('add-character').addEventListener('click', () => uiPanel.onAddCharacterHandlerToBoard(gameBoard));
}

runGame();

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



async function randomizeName() {
    const randomName = await getCharacterFromRickAndMortyApi();
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
//     deleteChar.id = `delete-char${gameBoard.characters.length-1}`;
//     console.log(deleteChar);
//
//     deleteChar.addEventListener('click', deleteCharacter);
// }

// const addCharacterButton = document.querySelector('#add-character');
// addCharacterButton.addEventListener('click', createCharacterByInputData);



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
