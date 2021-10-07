import {generateWeapon} from "./weapon.js";
import {getRandomNumberFromRange} from "./utilis.js";
import { getCharacterFromRickAndMortyApi, Hero, Villain } from './character.js';
import { GameBoard } from './gameBoard.js';

export class UiFactory {
    constructor() {
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

        this.randomCharacterButton = document.querySelector('#random-character');


        this.rawCharacterData = null;

        this.initEventListeners();
    }

    initEventListeners(){
        this.randomCharacterButton.addEventListener('click', this.onRandomCharacterHandler);

    }
    //Odczytanie danych z getRawCharacterData i sttworzenie konkretnej postaci
    // na podstawie tych danych (np 'new Hero')
    //Dodannie postaci do gameboardów
    onAddCharacterHandlerToBoard = (board) => {
        if (board instanceof GameBoard === false) {
            return false;
        }
        const fieldsAreCorrect = this.validAllFields();
        if (fieldsAreCorrect) {
            let character;
            if (this.pickTeam.value === 'teamHero') {
                character = new Hero(
                    this.rawCharacterData.name,
                    this.rawCharacterData.hitpoints,
                    this.rawCharacterData.strength,
                    this.rawCharacterData.weapon,
                    this.rawCharacterData.img
                );
            }

            if (this.pickTeam.value === 'teamVillain') {
                character = new Villain(
                    this.rawCharacterData.name,
                    this.rawCharacterData.hitpoints,
                    this.rawCharacterData.strength,
                    this.rawCharacterData.weapon,
                    this.rawCharacterData.img
                );
            }

            board.addCharacterToBoard(character);
            this.onRandomCharacterHandler();
        }

    }

    validAllFields() {
        this.clearErrorMessages();

        const isPickTeamFieldCorrect = this.validField(this.pickTeam, this.pickTeamError);
        const isNameFieldCorrect = this.validField(this.nameField, this.nameError, 3);
        const isWeaponFieldCorrect = this.validField(this.weaponField, this.weaponError, 3);

        return isPickTeamFieldCorrect && isNameFieldCorrect && isWeaponFieldCorrect;
    }

    onRandomCharacterHandler = async () => {
        await this.randomCharacterData();
        this.fillInputsByRandomData();
    }

    clearErrorMessages() {
        this.takenNameError.style.display = 'none';
        this.weaponError.style.display = 'none';
        this.nameError.style.display = 'none';
        this.pickTeamError.style.display = 'none';
        this.nameTooShortError.style.display = 'none';
        this.weaponNameTooShortError.style.display = 'none';
    }

    fillInputsByRandomData() {
        this.nameField.value = this.rawCharacterData.name;
        this.weaponField.value = this.rawCharacterData.weapon.name;
        this.strengthField.value = this.rawCharacterData.strength;
        this.hitpointsField.value = this.rawCharacterData.hitpoints;
    }

    validField(field, errorOutput, minValueLength) {
        const inputValue = field.value.trim()
        if (inputValue === '' || inputValue.length < minValueLength) {
            errorOutput.style.display = 'block';
            return false;
        }
        return true;
    }

    async randomCharacterData(){
        const characterFromApi = await getCharacterFromRickAndMortyApi();

        this.rawCharacterData = {
            name: characterFromApi.name,
            img: characterFromApi.image,
            weapon: generateWeapon(),
            strength: getRandomNumberFromRange(30, 60),
            hitpoints: getRandomNumberFromRange(100, 150)
        }


    }


}
