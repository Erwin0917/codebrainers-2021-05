import {generateWeapon} from "./weapon.js";
import {getRandomNumberFromRange} from "./utilis.js";
import { getCharacterFromRickAndMortyApi, Hero, Villain } from './character.js';
import { GameBoard } from './gameBoard.js';

export class UiFactory {
    rawCharacterData = null;

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
        this.randomName = document.querySelector('#random-name');
        this.randomWeapon = document.querySelector('#random-weapon');
        this.randomStrength = document.querySelector('#random-strength');
        this.randomHitpoints = document.querySelector('#random-hitpoints');

        this.startBattleButton = document.querySelector('#start-battle');

        this.initEventListeners();
    }

    initEventListeners(){
        this.randomCharacterButton.addEventListener('click', this.onRandomCharacterHandler);
        this.randomName.addEventListener('click', this.randomizeName);
        this.randomWeapon.addEventListener('click', this.randomizeWeapon);
        this.randomStrength.addEventListener('click', this.randomizeStrength);
        this.randomHitpoints.addEventListener('click', this.randomizeHitpoints);
    }

    onAddCharacterHandlerToBoard = (board) => {
        if (board instanceof GameBoard === false) {
            return false;
        }
        const fieldsAreCorrect = this.validAllFields(board);

        if (fieldsAreCorrect) {
            let character;

            const rawData = {
                    name: this.nameField.value,
                    hitPoints: this.hitpointsField.value,
                    strength: this.strengthField.value,
                    weapon: this.rawCharacterData.weapon,
                    img: this.rawCharacterData.img
            }

            character = this.pickTeam.value === 'teamHero' ? new Hero(rawData) : new Villain(rawData);

            character.weapon.name = this.weaponField.value;

            board.addCharacterToBoard(character);
            this.onRandomCharacterHandler();
        }

    }

    onRandomCharacterHandler = async () => {
        await this.randomCharacterData();
        this.fillInputsByRawCharacterData();
    }

    validAllFields(board) {
        this.clearErrorMessages();

        const isPickTeamFieldCorrect = this.validField(this.pickTeam, this.pickTeamError);
        const isNameFieldCorrect = this.validField(this.nameField, this.nameError, 3, [...board.heroesTeam, ...board.villainsTeam]);
        const isWeaponFieldCorrect = this.validField(this.weaponField, this.weaponError, 3);

        return isPickTeamFieldCorrect && isNameFieldCorrect && isWeaponFieldCorrect;
    }

    clearErrorMessages() {
        this.takenNameError.style.display = 'none';
        this.weaponError.style.display = 'none';
        this.nameError.style.display = 'none';
        this.pickTeamError.style.display = 'none';
        this.nameTooShortError.style.display = 'none';
        this.weaponNameTooShortError.style.display = 'none';
    }

    fillInputsByRawCharacterData() {
        this.nameField.value = this.rawCharacterData.name;
        this.weaponField.value = this.rawCharacterData.weapon.name;
        this.strengthField.value = this.rawCharacterData.strength;
        this.hitpointsField.value = this.rawCharacterData.hitpoints;
    }

    validField(field, errorOutput, minValueLength, isUniq) {
        const inputValue = field.value.trim()
        if (inputValue === '' || inputValue.length < minValueLength) {
            errorOutput.style.display = 'block';
            return false;
        }

        if (isUniq !== undefined && Array.isArray(isUniq)) {
            const anyDub = isUniq.some( char => char.name === inputValue);
            if (anyDub) {
                errorOutput.style.display = 'block';
                return false;
            }
        }
        return true;
    }

    async randomCharacterData() {
        const characterFromApi = await getCharacterFromRickAndMortyApi();

        this.rawCharacterData = {
            name: characterFromApi.name,
            img: characterFromApi.image,
            weapon: generateWeapon(),
            strength: getRandomNumberFromRange(30, 60),
            hitpoints: getRandomNumberFromRange(100, 150)
        }

        this.pickTeam.value = Math.random() > 0.5 ? 'teamHero' : 'teamVillain';
    }

    randomizeName = async () => {
        const randomCharacter = await getCharacterFromRickAndMortyApi();
        this.rawCharacterData.name = randomCharacter.name;
        this.fillInputsByRawCharacterData();
    }

    randomizeWeapon = () => {
        this.rawCharacterData.weapon = generateWeapon();
        this.fillInputsByRawCharacterData();
    }

    randomizeStrength = () => {
        this.rawCharacterData.strength = getRandomNumberFromRange(30, 60);
        this.fillInputsByRawCharacterData();
    }

    randomizeHitpoints = () => {
        this.rawCharacterData.hitpoints = getRandomNumberFromRange(100, 150);
        this.fillInputsByRawCharacterData();
    }



}
