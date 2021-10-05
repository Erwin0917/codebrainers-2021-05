import {generateWeapon} from "./weapon.js";
import {getRandomNumberFromRange} from "./utilis.js";
import {getDataForCharacter} from "./index.js";

export class UiFactory {
    constructor(gameBoard) {
        this.pickTeam = document.querySelector('#default_select')
        this.nameField = document.querySelector('#name');
        this.weaponField = document.querySelector('#weapon');
        this.strengthField = document.querySelector('#strength');
        this.hitpointsField = document.querySelector('#hitpoints');

        this.takenNameError = document.querySelector('#taken-name-error');
        this.weaponError = document.querySelector('#weapon-error');
        this.nameError = document.querySelector('#name-error');
        this.pickTeamError = document.querySelector('#select-team-error');
        this.nameTooShortError = document.querySelector('#too-short-name-error');
        this.weaponNameTooShortError = document.querySelector('#too-short-weapon-name-error');

        this.addCharacterButton = document.getElementById('add-character');

        this.rawCharacterData = null;

        this.gameBoard = gameBoard;

        this.initEventListeners();
    }

    initEventListeners(){
        this.addCharacterButton.addEventListener('click', this.onAddCharacterHandler);

    }
    //Odczytanie danych z getRawCharacterData i sttworzenie konkretnej postaci
    // na podstawie tych danych (np 'new Hero')
    //Dodannie postaci do gameboardów
    onAddCharacterHandler(){
        const pickTeamFieldCorrect = uiPanel.validField(uiPanel.pickTeam, uiPanel.pickTeamError);
    }

    clearErrorMessages() {
        this.takenNameError.style.display = 'none';
        this.weaponError.style.display = 'none';
        this.nameError.style.display = 'none';
        this.pickTeamError.style.display = 'none';
        this.nameTooShortError.style.display = 'none';
        this.weaponNameTooShortError.style.display = 'none';
    }

    async fillInputsByRandomData() {
        //const randomName = await getDataForCharacter();
        this.nameField.value = randomName.name;
        this.weaponField.value = generateWeapon().name;
        this.strengthField.value = getRandomNumberFromRange(30, 60);
        this.hitpointsField.value = getRandomNumberFromRange(100, 150)
    }

    validField(field, errorOutput, minValueLength) {
        const inputValue = field.value.trim()
        if (inputValue === '' || inputValue.length < minValueLength) {
            errorOutput.style.display = 'block';
            return false;
        }
        return true;
    }
    //Stwórz obiekt z danymi które zostaną przekazane do inputów
    // (obiekt a nie konkretna instancja klasy 'character')
    getRandomCharacterData(){

        //this.rawCharacterData = this.getRandomCharacterData();

    }


}