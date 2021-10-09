import {UiFactory} from "./uiFactory.js";
import {GameBoard} from "./gameBoard.js";


async function runGame() {
    const gameBoard = new GameBoard();
    const uiPanel = new UiFactory();

    await uiPanel.randomCharacterData();
    uiPanel.fillInputsByRawCharacterData();

    gameBoard.readStorage();

    document.getElementById('add-character').addEventListener('click', () => uiPanel.onAddCharacterHandlerToBoard(gameBoard));
    uiPanel.startBattleButton.addEventListener('click', gameBoard.startGame);
}

runGame();

// 1. add start battle to uiPanel
// 2. check number of players on board
// 3. start duel
// 4. finish when team loses all players