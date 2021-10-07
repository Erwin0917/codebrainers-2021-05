import {UiFactory} from "./uiFactory.js";
import {GameBoard} from "./gameBoard.js";


async function runGame() {
    const gameBoard = new GameBoard();
    const uiPanel = new UiFactory();

    await uiPanel.randomCharacterData();
    uiPanel.fillInputsByRawCharacterData();

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






// 1. don't change weapon attributes if random and then add (or add, error, add) (generate weapon attributes at random or at add?)
// 2. if shown, no name errors disappear after you input a name of min. 3 chars
// 3. randomize team option
// 5. min/max num of characters for weapon and name, randomize names max 15 char
// 6. delete char from team
// 7. reqstrength for weapon cant be higher than char strength (or generate again)
// 8. 85/86 character.js, isLoading?, starting data for strength and hitpoints
